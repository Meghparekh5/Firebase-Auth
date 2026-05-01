# 🔐 Firebase Auth App

A simple and modern authentication app built with **React (Vite)** and **Firebase Authentication**.
This project demonstrates how to integrate Google Sign-In and manage user sessions in a clean and practical way.

---

## 🚀 Features

* 🔑 Sign in with Google (Firebase Authentication)
* 🔄 Real-time auth state handling
* 👤 User profile display (name & avatar)
* 🚪 Secure logout functionality
* ⚡ Fast development with Vite
* 🧩 Clean and scalable component structure

---

## 🛠️ Tech Stack

* React (Vite)
* Firebase Authentication
* Firebase Realtime Database (optional)
* JavaScript (ES6+)
* CSS

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Login.jsx
 │    ├── Dashboard.jsx
 │
 ├── firebase.js
 ├── App.jsx
 ├── main.jsx
 ├── App.css
 ├── index.css
```

---

## ⚙️ Getting Started

### 1. Create Project

```
npm create vite@latest firebase-auth-app
cd firebase-auth-app
npm install
npm install firebase
```

---

### 2. Firebase Setup

* Go to Firebase Console
* Create a project
* Enable **Google Authentication**
* Register a **Web App**
* Copy your Firebase config

---

### 3. Configure Firebase

Update `firebase.js`:

```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};
```

---

### 4. Run the App

```
npm run dev
```

App will run on:

```
http://localhost:5173/
```

---

## 🔐 Authentication Flow

1. User clicks **Sign in with Google**
2. Firebase opens a secure popup
3. User selects account
4. App receives user data
5. UI updates instantly

---

## 📸 Screens

* Login Screen
* Dashboard with user info
* Logout state
   
  <img width="1351" height="339" alt="localhost_5173_ (3)" src="https://github.com/user-attachments/assets/4cc5ef56-e447-40df-b557-cab51a0eab13" />


   <img width="1351" height="369" alt="localhost_5173_ (4)" src="https://github.com/user-attachments/assets/e73811b0-3d43-4b53-b767-81bbb236b748" />

---
