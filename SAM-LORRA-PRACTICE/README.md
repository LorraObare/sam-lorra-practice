# SAM-LORRA-PRACTICE Login Page

A responsive React-based login page with image integration and adaptive design for mobile and desktop devices.

## 📦 Project Structure
SAM-LORRA-PRACTICE/
├── public/
│ └── login-illustration.JPG // Optional static image
├── src/
│ ├── assets/
│ │ └── login-illustration.JPG // Responsive image (preferred location)
│ ├── components/
│ │ └── LoginForm.jsx // Login form component
│ ├── pages/
│ │ └── Dashboard.jsx // Post-login dashboard placeholder
│ ├── App.jsx // Routes and app entry
│ ├── index.jsx // React root renderer
│ └── LoginForm.css // Component styling
├── package.json
└── README.md

## ✨ Features

- ✅ **Login form** with email and password fields
- ✅ **Form validation** with error message on incorrect credentials
- ✅ **Responsive design** (desktop & mobile support)
- ✅ **Image section** alongside the form on large screens
- ✅ **Basic routing** using `react-router-dom`
- ✅ **Navigation** to `/dashboard` on successful login
- ✅ **JWT simulation** using `localStorage`

## 🖼️ UI Overview

The page is split into two parts on desktop:
- **Left side**: An image (stored in `/assets` or `/public`)
- **Right side**: A form with email/password fields and login button

On **mobile**, the layout stacks vertically with the form first, then the image.

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) (development server & bundler)
- [Axios](https://axios-http.com/) (for future real API calls)
- CSS (custom responsive styles)

## 🚀 Setup Instructions

1. **Clone the project**  
   ```bash
   git clone https://github.com/your-username/sam-lorra-practice.git
   cd sam-lorra-practice
