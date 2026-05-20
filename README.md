# RPG Productivity App ⚔️

Backend API inspired by RPG systems to transform real-life productivity into character progression.

Users can create tasks, complete challenges, gain XP, level up, and evolve specific attributes like discipline, knowledge, mentality, body, social, and finances.

---

# 🚀 Features

## ✅ Authentication System
- JWT Authentication
- Login & Register
- Password Hashing with bcrypt
- Protected Routes
- Token Validation Middleware
- Multiuser Architecture

---

## ✅ Task System
- Create Tasks
- Complete Tasks
- Dynamic XP Rewards
- Difficulty System
- User-specific Tasks
- Task Completion Validation

---

## ✅ RPG Progression System
- XP Gain
- Dynamic Leveling System
- Remaining XP Logic
- Skill Progression
- Attribute Evolution

Attributes:
- Discipline
- Knowledge
- Mentality
- Body
- Social
- Finances

---

# 🧠 Technologies Used

- Node.js
- Express.js
- Firebase Firestore
- bcrypt
- jsonwebtoken (JWT)
- dotenv

---

# 📁 Project Structure

```bash
src/
├── config/
│   └── firebase.js
│
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── userController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── userRoutes.js
│
└── server.js
```

---

# 🔐 Authentication Flow

## Register
User creates an account:

```http
POST /auth/register
```

### Body

```json
{
  "email": "user@email.com",
  "username": "Fernando",
  "password": "123456"
}
```

---

## Login

```http
POST /auth/login
```

### Body

```json
{
  "email": "user@email.com",
  "password": "123456"
}
```

### Response

```json
{
  "token": "JWT_TOKEN"
}
```

---

# 🛡 Protected Routes

Protected routes require:

```http
Authorization: Bearer YOUR_TOKEN
```

Example:

```http
GET /users/profile
```

---

# 📌 API Routes

# Auth Routes

| Method | Route | Description |
|---|---|---|
| POST | /auth/register | Register new user |
| POST | /auth/login | Login user |

---

# User Routes

| Method | Route | Description |
|---|---|---|
| GET | /users/profile | Get authenticated user profile |

---

# Task Routes

| Method | Route | Description |
|---|---|---|
| POST | /tasks | Create task |
| GET | /tasks | Get authenticated user tasks |
| PATCH | /tasks/:id/completed | Complete task |

---

# ⚔️ XP System

XP rewards are based on task difficulty.

| Difficulty | XP |
|---|---|
| Easy | 10 XP |
| Medium | 25 XP |
| Hard | 1000 XP |

---

# 🧬 Dynamic Level System

Level progression uses dynamic scaling.

Example:

| Level | XP Required |
|---|---|
| 1 → 2 | 100 XP |
| 2 → 3 | 200 XP |
| 3 → 4 | 300 XP |

Formula:

```js
xpToNextLevel = level * 100
```

---

# 🔒 Security

- Passwords are hashed with bcrypt
- JWT tokens expire in 7 days
- Protected routes use middleware validation
- User tasks are isolated by userId
- Sensitive environment variables are hidden using .env

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

Example:

```env
JWT_SECRET=your_secret_here
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/dvlneon1/rpg-productivity-app.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Server

```bash
npm run dev
```

---

# 🎯 Future Features

- Daily Quests
- Achievement System
- Inventory System
- Equipment System
- Guilds / Teams
- Leaderboards
- Frontend Integration
- AI Productivity Assistant
- Statistics Dashboard
- Task Categories UI

---

# 🧠 Learning Goals

This project was created to practice:

- Backend Development
- REST APIs
- Authentication
- Middleware
- Firestore Queries
- JWT Security
- RPG System Logic
- Software Architecture
- Multiuser Systems

---

# 👨‍💻 Author

Developed by Fernando César Barbosa Tomain Filho.

---

# 📜 License

This project is under development for educational and portfolio purposes.

