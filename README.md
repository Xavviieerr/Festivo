# Festivo

![React](https://img.shields.io/badge/Frontend-React-blue)  
![Redux](https://img.shields.io/badge/State-Redux-purple)  
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC)  
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)  
![Express](https://img.shields.io/badge/Framework-Express-lightgrey)  
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)  
![Nodemailer](https://img.shields.io/badge/Email-Nodemailer-orange)  
![Cron](https://img.shields.io/badge/Worker-node--cron-yellowgreen)

---

**Never miss a moment.**  
Schedule messages ahead of time and let Festivo handle the rest. Personalize wishes for birthdays, holidays, and special events, and Festivo will deliver them right on time — so you can stay thoughtful without staying busy.

---

## Who is it for?

Festivo is designed for busy professionals who want to stay thoughtful without juggling calendars, but it’s simple enough for anyone who wants to automate well-wishes — from birthdays to special occasions.

---

## Tech Stack

- **Frontend**: React, Redux, TailwindCSS, React Router
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Worker**: Node.js + node-cron
- **Email**: Nodemailer (Ethereal for testing, SMTP for production)
- **State Persistence**: Redux + localStorage

---

## Setup

```bash
# Clone the repo
git clone https://github.com/your-username/festivo.git
cd festivo

# Install dependencies
cd client && npm install
cd ../server && npm install

# Run frontend
cd client
npm run dev

# Run backend
cd ../server
npm start

# Run cron worker
node jobs/cronWorker.js

You can access sent mock email on the terminal you ran that ☝

Background Jobs

Festivo uses a cron worker (node-cron) to periodically check the database for upcoming events and send personalized emails with Nodemailer.

For learning purposes and simplicity, this project runs a basic cron job with:

# Run cron worker
node jobs/cronWorker.js

Production note:
In real-world deployments, tools like BullMQ (Redis-backed job queue), Agenda, or managed schedulers (e.g., AWS EventBridge, Google Cloud Scheduler) would be better. They provide:

Reliability and retries

Scalability across multiple servers

Better monitoring and job management

Due to technical constraints (lightweight setup, no Redis), Festivo uses a simple cron job for now — but the structure allows for upgrading later.
```
