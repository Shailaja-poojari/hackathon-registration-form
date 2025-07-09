# 🎓 SaIT Hackathon Registration Portal

A fully responsive **full-stack web application** built to register students for Hackathon/Ideathon events at **Sambhram Institute of Technology**,using React (Frontend), Supabase (Backend & Database), and EmailJS (Email Service).This is a full-stack web application using modern serverless architecture with client-side form validation, live participant counter, and email notifications.
Folder Structure: 
src/
├── components/
│   ├── RegistrationForm.jsx
│   └── ParticipantCount.jsx
├── lib/
│   └── supabaseClient.js
├── App.jsx
├── main.jsx
├── index.css

## 🔧 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL)-Database-as-a-Service
- **Email Service**: EmailJS (for confirmation emails)
- **Deployment**:Vercel/Netlify

## ✅ Features

- Clean and responsive register for Hackathon / Ideathon / Both
- Stores registration data securely in Supabase (Real-time participation count)
- Sends confirmation email instantly using EmailJS
- Clean, mobile-responsive design

## 🧑‍🎓 Eligibility

Only students of **Sambhram Institute of Technology** are allowed to register.

## 🚀 How to Run Locally

```bash
git clone https://github.com/shailaja-poojari/oscode-registration.git
cd oscode-registration
npm install
npm run dev



