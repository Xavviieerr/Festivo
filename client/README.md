festivo/
├── client/ # Vite + React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/ # Axios/fetch API calls
│ │ └── main.jsx, App.jsx
│ |── README.md
└── vite.config.js

├── server/ # Express backend
│ ├── config/ # MongoDB and Resend setup
│ ├── controllers/ # Route logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routes
│ ├── jobs/ # Scheduled message sender
│ ├── utils/ # Email templates, helpers
│ ├── server.js
│ └── .env

├── README.md

version two
wellwish-app/
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable components (forms, modals, etc.)
│ │ ├── pages/ # Pages (Home, Dashboard, etc.)
│ │ ├── services/ # API service functions (calls to backend)
│ │ ├── App.jsx
│ │ └── index.jsx
│ └── package.json

├── server/ # Express backend
│ ├── config/ # DB, Resend, environment setup
│ ├── controllers/ # Logic for scheduling, sending messages
│ ├── models/ # MongoDB schemas (User, Message)
│ ├── routes/ # Express routes (e.g. /messages)
│ ├── jobs/ # Cron job for scheduled sends
│ ├── utils/ # Helpers (formatting, email templates)
│ ├── server.js
│ └── package.json

├── .env # Environment variables
├── README.md
└── package.json # Root config if using a monorepo
