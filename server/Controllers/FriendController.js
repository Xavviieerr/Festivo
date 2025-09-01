import FriendModel from "../Models/friendModel.js";

export const addFriend = async (req, res) => {
  const user = req.user;
  const userFriend = req.body;

  const userInstance = new FriendModel(userFriend);
  try {
    const alreadyRegistered = await FriendModel.findOne({
      email: userFriend.email,
    });

    if (alreadyRegistered) {
      res.status(400).json({ message: "You have a friend with this email." });
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
  res.status(200).json("all users");
};
