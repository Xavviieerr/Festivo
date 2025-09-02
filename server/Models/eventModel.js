import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    friendId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Friend",
      required: true,
    },
    type: {
      type: String,
      enum: ["birthday", "anniversary", "custom"],
      required: true,
    },
    datetime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const EventModel = mongoose.model("Events", eventSchema);

export default EventModel;
