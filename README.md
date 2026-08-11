# 🎬 YouTube Clone — Full Stack Application

<p align="center">
  <strong>🚀 A modern full-stack YouTube-inspired video streaming platform</strong>
</p>

<p align="center">
  Built with ❤️ using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong> and modern web technologies.
</p>

---

## 🌟 Overview

**YouTube Clone** is a full-stack video streaming application inspired by the core experience of YouTube.

The project is designed to demonstrate how a modern video platform can be built using a **React frontend** and a **Node.js/Express backend**, with a clean architecture that can be scaled as the application grows.

🎯 The main goal is to build a production-style application with:

* 🎥 Video browsing and streaming
* 🔍 Search functionality
* 👤 User authentication
* ❤️ Likes and dislikes
* 💬 Comments
* 📺 Channels
* 📂 Playlists
* 🔔 Subscriptions
* 📱 Responsive UI
* ⚡ Fast and scalable APIs

---

## ✨ Features

### 🎥 Video Platform

* ▶️ Browse videos
* 🔍 Search videos
* 🎬 Watch video details
* 👍 Like / dislike videos
* 💬 Add and manage comments
* 📺 View channel information
* 📊 Video metadata and statistics

### 👤 User Features

* 🔐 User registration
* 🔑 User login
* 🚪 Logout
* 👤 User profile
* 🖼️ Profile/avatar management
* 📺 Subscribe / unsubscribe from channels

### 📚 Content Management

* ⬆️ Upload videos
* 🖼️ Upload thumbnails
* ✏️ Update video information
* 🗑️ Delete videos
* 📂 Create playlists
* ➕ Add videos to playlists

### 🎨 UI / UX

* 📱 Fully responsive design
* 🌙 Dark mode support
* ⚡ Fast navigation
* 🎯 Component-based architecture
* 🧩 Reusable React components
* ✨ Clean and modern interface

---

# 🏗️ Project Architecture

```text
youtube-clone/
│
├── 📁 backend/
│   │
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   ├── 📁 routes/
│   │   ├── 📁 models/
│   │   ├── 📁 middlewares/
│   │   ├── 📁 utils/
│   │   ├── 📁 db/
│   │   └── 📄 app.js
│   │
│   ├── 📄 package.json
│   └── 📄 .env
│
├── 📁 frontend/
│   │
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 pages/
│   │   ├── 📁 layouts/
│   │   ├── 📁 hooks/
│   │   ├── 📁 services/
│   │   ├── 📁 store/
│   │   └── 📄 App.jsx
│   │
│   ├── 📁 public/
│   └── 📄 package.json
│
├── 📄 .gitignore
├── 📄 README.md
└── 📄 package.json
```

---

# 🛠️ Tech Stack

## 🎨 Frontend

| Technology                 | Purpose             |
| -------------------------- | ------------------- |
| ⚛️ React                   | UI development      |
| 🟦 JavaScript / TypeScript | Application logic   |
| 🎨 CSS / Tailwind          | Styling             |
| 🔄 Redux / Context API     | State management    |
| 🌐 Axios                   | API communication   |
| 🧭 React Router            | Client-side routing |

## ⚙️ Backend

| Technology          | Purpose             |
| ------------------- | ------------------- |
| 🟢 Node.js          | Runtime environment |
| 🚂 Express.js       | Backend framework   |
| 🍃 MongoDB          | Database            |
| 🧩 Mongoose         | MongoDB ODM         |
| 🔐 JWT              | Authentication      |
| 🔒 bcrypt           | Password hashing    |
| ☁️ Cloudinary / AWS | Media storage       |

---

# 🔄 Application Flow

```text
                    👤 USER
                       │
                       ▼
                ┌─────────────┐
                │ ⚛️ React UI │
                └──────┬──────┘
                       │
                       │ HTTP / REST API
                       ▼
              ┌──────────────────┐
              │ 🟢 Node + Express│
              └────────┬─────────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      🔐 Auth       🎥 Videos     💬 Comments
          │            │            │
          └────────────┼────────────┘
                       ▼
                ┌─────────────┐
                │ 🍃 MongoDB  │
                └─────────────┘
```

---

# 🚀 Getting Started

Follow these steps to run the project locally.

## 1️⃣ Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>

cd youtube-clone
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd backend

npm install
```

---

## 3️⃣ Install Frontend Dependencies

Open another terminal:

```bash
cd frontend

npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ **Never commit your `.env` file to GitHub.**

Use `.env.example` to document required environment variables.

Example:

```env
PORT=

MONGODB_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

# ▶️ Run the Application

## Backend

```bash
cd backend

npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

## Frontend

```bash
cd frontend

npm run dev
```

Frontend will normally be available at:

```text
http://localhost:5173
```

---

# 📡 API Structure

Example API structure:

```text
/api
│
├── /auth
│   ├── POST   /register
│   ├── POST   /login
│   └── POST   /logout
│
├── /users
│   ├── GET    /profile
│   └── PATCH  /profile
│
├── /videos
│   ├── GET    /
│   ├── GET    /:id
│   ├── POST   /
│   ├── PATCH  /:id
│   └── DELETE /:id
│
├── /comments
│   ├── GET    /:videoId
│   ├── POST   /
│   └── DELETE /:id
│
└── /playlists
    ├── GET    /
    ├── POST   /
    └── DELETE /:id
```

---

# 🔐 Authentication

The application uses token-based authentication.

```text
Login
  │
  ▼
Validate Credentials
  │
  ▼
Generate JWT
  │
  ▼
Client receives token
  │
  ▼
Authenticated API Request
  │
  ▼
Auth Middleware
  │
  ▼
Protected Controller
```

Passwords are never stored as plain text and are securely hashed before being stored.

---

# 🧩 Backend Architecture

The backend follows a modular architecture:

```text
Request
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Service / Business Logic
   ↓
Model
   ↓
MongoDB
   ↓
Response
```

### 📁 Controllers

Responsible for handling incoming requests and returning responses.

### 📁 Routes

Defines API endpoints and connects them with controllers.

### 📁 Models

Defines MongoDB schemas using Mongoose.

### 📁 Middleware

Handles:

* 🔐 Authentication
* ❌ Error handling
* 🛡️ Authorization
* 📝 Request processing

### 📁 Utils

Contains reusable utilities such as:

* API Response
* API Error
* Async Handler
* Authentication helpers

---

# ⚛️ Frontend Architecture

The React application follows a reusable component-based architecture.

```text
App
 │
 ├── Layout
 │
 ├── Navbar
 │
 ├── Sidebar
 │
 ├── Pages
 │    ├── Home
 │    ├── Watch
 │    ├── Channel
 │    ├── Search
 │    └── Profile
 │
 └── Shared Components
      ├── VideoCard
      ├── VideoPlayer
      ├── Comment
      ├── Button
      └── Modal
```

---

# 🧪 Testing

Testing can be added using tools such as:

* 🧪 Jest
* ⚛️ React Testing Library
* 🔌 Supertest

Run tests:

```bash
npm test
```

---

# 📦 Production Build

### Frontend

```bash
npm run build
```

### Backend

```bash
npm start
```

---

# 🔒 Security Considerations

The application should follow standard security practices:

* 🔐 Hash passwords
* 🛡️ Validate API input
* 🚫 Never expose secrets
* 🔑 Use secure JWT configuration
* 🌐 Configure CORS correctly
* 🧹 Sanitize user input
* ⏱️ Implement rate limiting
* 🔒 Use HTTPS in production

---

# 📈 Future Improvements

The project can be extended with:

* 🤖 AI-powered video recommendations
* 🧠 Personalized recommendation engine
* 🔴 Live streaming
* 📡 Real-time notifications
* 💬 Real-time chat
* 📱 Mobile application
* 🎙️ Video transcription
* 🌎 Multi-language support
* 📊 Creator analytics dashboard
* 💰 Monetization system
* 🏆 Trending algorithm

---

# 🤝 Contributing

Contributions are welcome! 🎉

### Steps

```bash
# Fork the repository

# Create a feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m "feat: add amazing feature"

# Push the branch
git push origin feature/amazing-feature

# Open a Pull Request
```

Please keep commits clean and follow the project's coding conventions.

---

# 📜 License

This project is created for **educational and development purposes**.

Add your preferred license here if this project is intended for public distribution.

---

# 👨‍💻 Author

**Sandeep Rai**

💻 Full-Stack / Frontend Developer
⚛️ React • Next.js • TypeScript • Node.js

---

<p align="center">
  ⭐ If you like this project, consider giving it a star!
</p>

<p align="center">
  Built with ❤️ and ☕
</p>
