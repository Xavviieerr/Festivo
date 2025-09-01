import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../Models/userModel.js";

//registering a user
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);
  const { email } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      res.status(400).json({ message: "Email is already Registered!" });
    }
    const user = await newUser.save();
    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json("Wrong Password!");
      } else {
        const token = jwt.sign(
          {
            email: user.email,
            id: user._id,
          },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User does not exist!");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Internal Server Error!" });
  }
};

export const updateDetails = async (req, res) => {
  try {
    const userId = req.user.id;
    const { firstname, lastname, gender, nationality } = req.body;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //checks if the user data to be updated exists
    if (
      user.firstname === firstname &&
      user.lastname === lastname &&
      user.nationality === nationality &&
      user.gender === gender
    ) {
      return res.status(400).json({
        message: "No changes detected. You already have this information.",
      });
    }

    //updates the user
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { firstname, lastname, gender, nationality, profileComplete: true },
      { new: true }
    );

    //checks if user to be updated was found
    if (!updatedUser) {
      return res.status(404).json("User not found!");
    }

    if (
      updatedUser.firstname &&
      updatedUser.lastname &&
      updatedUser.nationality &&
      updatedUser.gender
    ) {
      if (!updatedUser.isProfileComplete) {
        updatedUser.isProfileComplete = true;
        await updatedUser.save();
      }
    }
    res.status(200).json({
      user: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Internal Server Error!" });
  }
};
