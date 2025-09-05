import FriendModel from "../Models/friendModel.js";
import mongoose from "mongoose";

export const addFriend = async (req, res) => {
  const user = req.user;
  const userFriend = req.body;

  const userInstance = new FriendModel({ ...userFriend, friendId: user.id });
  try {
    const alreadyRegistered = await FriendModel.findOne({
      email: userFriend.email,
      friendId: user.id,
    });

    if (alreadyRegistered) {
      return res
        .status(400)
        .json({ message: "You have a friend with this email." });
    }

    const registeredUser = await userInstance.save();

    if (registeredUser) {
      return res.status(200).json(registeredUser);
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json("Internal Server Error!");
  }
  res.status(200).json("working");
};

export const allFriends = async (req, res) => {
  const user = req.user;
  try {
    const friends = await FriendModel.find({ friendId: user.id }).sort({
      createdAt: -1,
    });

    if (friends.length === 0) {
      return res.status(404).json({ message: "No friends found." });
    }

    return res.status(200).json(friends);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

export const deleteFriend = async (req, res) => {
  const user = req.user;
  const userId = user.id;
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    const foundUser = await FriendModel.findById(id);
    if (foundUser) {
      if (foundUser.friendId === userId) {
        const deletedUser = await FriendModel.findByIdAndDelete(id);

        if (!deletedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.json(deletedUser);
      }
    }
    if (!foundUser) {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
