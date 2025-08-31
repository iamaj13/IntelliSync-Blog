# 📝 IntelliSync Blog

IntelliSync Blog is a **modern AI-powered blogging platform** designed to connect knowledge and creativity.  
It provides a clean, responsive, and feature-rich experience for writers and readers, with integrated tools to keep users updated with insights and innovations.

---

## 🌟 Features
- 🔐 **User Authentication** – Secure login & signup system.
- ✍️ **Rich Text Editor** – Write blogs with markdown/formatting support.
- 🧠 **AI Assistance** – AI-powered suggestions for titles, summaries, and SEO optimization.
- 📱 **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.
- 📊 **Dashboard** – Track posts, readers, and engagement.
- 🔍 **Search & Categories** – Easily discover blogs by topic or keyword.
- 💬 **Comments System** – Readers can interact with authors and posts.
- 🌙 **Dark Mode** – Switch between light and dark themes.

---

## 🛠️ Tech Stack
**Frontend:**
- React.js (Vite)
- Tailwind CSS (custom themes)
- React Router

**Backend:**
- Node.js + Express
- MongoDB / PostgreSQL (choose your DB)
- JWT Authentication

**Other Tools:**
- Git & GitHub (Version Control)
- ESLint + Prettier (Code Quality)
- AI API Integration (optional for blog assistance)

---

## 📂 Project Structure 
IntelliSync-Blog/
│
├── frontend/ # React frontend code
│ ├── src/
│ │ ├── assets/ # Images, icons, and static files
│ │ ├── components # Reusable UI components
│ │ ├── pages/ # Application pages (Home, Blog, etc.)
│ │ └── App.jsx # React entry point
│ └── package.json # Frontend dependencies
│
├── backend/ # Node.js backend code
│ ├── models/ # Database schemas
│ ├── routes/ # API endpoints
│ ├── controllers/ # Business logic
│ └── server.js # Backend entry point
│
├── .gitignore # Files ignored by Git
├── README.md # Project documentation
└── package.json # Root config (optional if combined setup)
