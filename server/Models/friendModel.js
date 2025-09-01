import mongoose from "mongoose";

const FriendSchema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, requires: true },
    email: { type: String, lowercase: true, trim: true },
    nickname: { type: String },
    relationship: { type: String },
    tone: { type: String },
    humor: { type: String },
    length: { type: String },
    emojis: { type: String },
    language: { type: String },
    saying: { type: String },
    hobby: { type: String },
    movieBook: { type: String },
    food: { type: String },
    sport: { type: String },
    personality: { type: String },
    messageStyle: { type: String },
    oneWord: { type: String },
    values: { type: String },
    insideJoke: { type: String },
  },
  { timestamps: true }
);

const FriendModel = mongoose.model("Friends", FriendSchema);
export default FriendModel;
