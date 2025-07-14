import bcrypt from "bcrypt";
import UserModel from "../Models/userModel.js";

//registering a user
export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UserModel({ email, hashedPassword });
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const loginUser = async (req, res) => {
  //there is a major issue with this login the server crashes
  //everytime you log in
  const { email, password } = req.body;
  try {
    const valid = bcrypt.compare(password, Users.password);
    valid
      ? res.status(200).json(Users)
      : res.status(400).json("Wrong Password!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
