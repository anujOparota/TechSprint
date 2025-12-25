# 🏥 AI-Assisted Healthcare Web Application

An AI-powered healthcare platform built with **React (Vite)** and **Firebase**, designed to help users manage appointments, get emergency assistance, inquire about medicines, create health routines, and maintain medical records — all in one place.

This project is being developed as part of a **hackathon / academic project** with a focus on **Google technologies** and **AI integration**.

---

## 🚀 Features

### 🔐 Authentication

- User Login & Registration
- Firebase Authentication
- Protected routes for authenticated users

### 📊 Dashboard

- Central hub to access all features:
  - Appointments
  - Emergency
  - Medicine Inquiry
  - Routine Creator
  - Notifications
  - User Records

### 📅 Appointments

- Book new appointments
- View previously booked appointments

### 🚨 Emergency Module

- Emergency landing page with 3 options:
  - 🩹 First Aid guidance (AI-assisted)
  - 🚑 Ambulance request
  - 🩸 Blood request

### 💊 Medicine Inquiry

- Ask questions about medicines
- AI-powered responses (via Google Gemini)

### 🧠 Routine Creator

- Generate 7-day / 30-day health routines
- AI-generated and stored for future access

### 🔔 Notifications

- View important health alerts and updates

### 📁 User Records

- User profile
- View past medical records and uploaded reports

---

## 🛠 Tech Stack

### Frontend

- React (Vite)
- JavaScript
- React Router DOM

### Backend / Services

- Firebase Authentication
- Firebase Firestore
- Firebase Storage
- Firebase Hosting (planned)

### AI Integration

- Google Gemini API (via backend / Cloud Functions)

### Version Control

- Git & GitHub

---

## 📁 Project Structure

src/

├── assets/

├── components/

├── context/

├── hooks/

├── pages/

│   ├── Appointment/

│   │     ├── Appointments.jsx

│   │     └── Appointments.css

│   ├── Auth/

│   │     ├── Login.jsx

│   │     ├── Register.jsx

│   │     └── Auth.css

│   ├── Dashboard/

│   │     ├── Dashboard.jsx

│   │     └── Dashboard.css

│   ├── Emergency/

│   │     ├── Emergency.jsx

│   │     ├── FirstAid.jsx

│   │     └── BloodRequest.jsx

│   ├── Medicine/

│   │     └── MedicineInquiry.jsx

│   ├── Notification/

│   │     └── Notification.jsx

│   ├── Routine/

│   │     └── RoutineCreate.jsx

│   └── UserProfile/

│         └── UserRecord.jsx

├── services/

├── utils/

├── App.jsx

├── App.css

├── index.css

└── main.jsx

---

## ⚙️ Environment Variables

This project uses environment variables for configuration.

Create a `.env.local` file in the root directory:
-------------------------------------

VITE_FIREBASE_API_KEY=your_key

VITE_FIREBASE_AUTH_DOMAIN=your_domain

VITE_FIREBASE_PROJECT_ID=your_project_id

VITE_FIREBASE_STORAGE_BUCKET=your_bucket

VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

VITE_FIREBASE_APP_ID=your_app_id

📌 **Note:**

- `.env` and `.env.local` are ignored using `.gitignore`
- Never push API keys to GitHub

---

## ▶️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```


2. Install dependencies

npm install

3. Add environment variables in `.env.local`
4. Start the development server

npm run dev

---

## ⚠️ Disclaimer

This application provides AI-assisted guidance only and is **not a replacement for professional medical advice**.
-------------------------------------------------------------------------------------------------------------

## 📌 Project Status

- ✅ Project structure completed
- 🟡 Features under development
- 🔜 AI integration planned
