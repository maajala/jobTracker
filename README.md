# 🧠 Job Tracker App

A full-stack application built with **React** and **Node.js** that allows users to track job applications. It supports **CRUD** operations (Create, Read, Update, Delete) and connects to **MongoDB** for persistent storage.

---

## 🛠️ Technologies Used

| Frontend       | Backend        | Database        |
|----------------|----------------|-----------------|
| React (Hooks)  | Node.js        | MongoDB Atlas   |
| Fetch API      | Express.js     | Mongoose Driver |
| CSS            | CORS           |                 |

---

## 🚀 Features

- ✅ Add a new job listing
- 📋 View all job listings
- ✏️ Edit any job
- ❌ Delete jobs
- 🔗 Connected to MongoDB for persistent storage

---

### 📁 Project Structure

```
jobTracker/
├── client/                  # React frontend
│   └── src/
│       ├── App.js
│       └── App.css
│
├── server/                  # Node + Express backend
│   └── index.js
│
└── README.md
```


## ⚙️ How It Works

### Backend (`/server`)
- Built using **Express**
- REST API endpoints:
  - `GET /jobs` — Get all jobs
  - `POST /jobs` — Add a new job
  - `PUT /jobs/:id` — Update job
  - `DELETE /jobs/:id` — Delete job
- Connected to MongoDB Atlas using `MongoClient`

### Frontend (`/client`)
- Built with **React**
- Manages state using `useState` and `useEffect`
- Fetches data from the backend API
- Simple responsive layout with search/filter and edit/delete controls

---

## 🧠 What I Learned

- Setting up a full **MERN-style project**
- Working with Express and API routing
- Managing React component state
- Connecting to **MongoDB Atlas** from Node.js
- Using `ObjectId` and MongoDB’s document update tools
- Securely pushing a project to GitHub via SSH
- Organizing full-stack apps with clean folder structures

---

## 🧪 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone git@github.com:maajala/jobTracker.git
   cd jobTracker
   ```

2. Start the backend:
```bash
      cd server
      npm install
      node index.js
```
4. Start the frontend (Open a 2nd terminal): 
```bash
      cd client
      npm install
      npm start
  ```
Note: The frontend runs at http://localhost:3000 and the backend at http://localhost:8080.
---

### 📌 Future Improvements:

🔍 Search and filter jobs (partially implemented)  
🔐 Add authentication (login/signup)  
☁️ Deploy frontend + backend to Netlify/Vercel + Render  
📱 Improve mobile responsiveness  
---

### 👨‍💻 Author:
  Ahmad Maajal 
📍 Canada 
🔗 GitHub: maajala 
💼 Aspiring Full Stack Developer 
---

## 📄 License:

 This project is open source and available under the MIT License.
