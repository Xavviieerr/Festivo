import cron from "node-cron";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import winston from "winston";
import FriendModel from "../Models/friendModel.js";
import EventModel from "../Models/eventModel.js";
import UserModel from "../Models/userModel.js";

//env variables
dotenv.config();

//Connects to mongodb
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Worker connected to MongoDB"))
  .catch((err) => console.error("Worker DB connection error:", err));

// Logger
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

//Ai Demo message
function mockAIMessage(friend, event) {
  return `Hey ${friend.firstname}, happy ${event.eventType}! This is a personalized message just for you.`;
}

//Email setup with etheral
async function createTransporter() {
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

async function processEvents() {
  try {
    //current date
    const now = new Date();

    //finds uncompleted events now or in the past
    const events = await EventModel.find({
      datetime: { $lte: now },
      status: "Scheduled",
    });
    if (events.length === 0) {
      logger.info("No events to process.");
    }

    //creates new transporter by calling the function above
    const transporter = await createTransporter();

    //a loop that send the email for all events found
    for (const event of events) {
      const friend = await FriendModel.findById(event.friendId);
      const user = await UserModel.findById(event.userId);

      if (!friend || !user) {
        logger.warn(`Missing friend/user for event ${event._id}`);
        continue;
      }

      //creates the ai message but for now mock or demo message
      const message = mockAIMessage(friend, event);

      //now sends email
      const info = await transporter.sendMail({
        from: `"${user.firstname}" <${user.email}>`,
        to: friend.email,
        subject: `${event.eventType} Reminder`,
        text: message,
      });
      logger.info(
        `Email sent for event ${
          event._id
        }. Preview: ${nodemailer.getTestMessageUrl(info)}`
      );
      event.status = "Completed";
      await event.save();
    }
  } catch (error) {
    logger.error("Error processing events:", error);
  }
}

cron.schedule("* * * * *", () => {
  logger.info("Cron job running...");
  processEvents();
});
