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
    friendName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
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
