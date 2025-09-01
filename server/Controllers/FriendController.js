import FriendModel from "../Models/friendModel.js";

export const addFriend = async (req, res) => {
  const user = req.user;
  const userFriend = req.body;

  const userInstance = new FriendModel({ ...userFriend, friendId: user.id });
  try {
    const alreadyRegistered = await FriendModel.findOne({
      email: userFriend.email,
    });

    if (alreadyRegistered) {
      return res
        .status(400)
        .json({ message: "You have a friend with this email." });
    }

    const registeredUser = await userInstance.save();

    if (registeredUser) {
      return res.status(200).json({ registeredUser });
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
