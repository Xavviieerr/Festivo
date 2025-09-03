import mongoose from "mongoose";
import EventModel from "../Models/eventModel.js";
import FriendModel from "../Models/friendModel.js";

export const addEvent = async (req, res) => {
  const user = req.user.id;
  const info = req.body;
  const { id } = req.params;
  let friendName = "";

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid friend ID" });
    }
    const friendInfo = await FriendModel.findById(id);
    if (friendInfo) {
      friendName = friendInfo.firstname + " " + friendInfo.lastname;
    }
    if (!friendInfo) {
      return res.status(400).json("Friend does not exist.");
    }
    const event = {
      ...info,
      userId: user,
      friendId: id,
      status: "Scheduled",
      friendName: friendName,
    };
    const newEvent = new EventModel(event);
    const saved = await newEvent.save();
    if (!saved) {
      return res.status(400).json("Create event failed.");
    }
    return res.status(200).json(saved);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error!");
  }
};

export const allEvents = async (req, res) => {
  const userId = req.user.id;
  try {
    const response = await EventModel.find({ userId: userId });

    if (!response) {
      return res.status(404).json("No Events Found!");
    }

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error!");
  }
};

export const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({ error: "Invalid event ID" });
    }
    const deletedEvent = await EventModel.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(deletedEvent);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};
