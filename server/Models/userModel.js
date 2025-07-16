import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,
    Nationality: String,
    Gender: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
