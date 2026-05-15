# ✍️ WriteStack

<div align="center">

![WriteStack Banner](https://img.shields.io/badge/WriteStack-Blog%20Platform-6C63FF?style=for-the-badge&logo=appwrite&logoColor=white)

**A modern, full-featured blog platform built with React and powered by Appwrite as a Backend-as-a-Service.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-BaaS-FD366E?style=flat-square&logo=appwrite)](https://appwrite.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Material UI](https://img.shields.io/badge/Material-UI-007FFF?style=flat-square&logo=mui)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)


</div>

---

## 📖 About the Project

**WriteStack** is a full-stack blog application that leverages **Appwrite** as a Backend-as-a-Service (BaaS), eliminating the need to build and maintain a custom backend server. Users can create accounts, write rich blog posts, manage their content, and explore posts by others — all in a beautifully animated, responsive UI.

> This project was built to demonstrate BaaS integration in a real-world React application, covering authentication, database, file storage, and real-time features — all through Appwrite's SDK.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 18 + Vite |
| **Backend-as-a-Service** | Appwrite (Auth, Database, Storage) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **UI Components** | Material UI (MUI) |
| **Routing** | React Router DOM |
| **State Management** | Redux Toolkit / Context API |
| **Rich Text Editor** | TinyMCE / React Quill |
| **Deployment** | Vercel |

---

## ✨ Features

- 🔐 **Authentication** — Secure sign up, login, and logout via Appwrite Auth
- 📝 **Create & Edit Posts** — Rich text editor for writing blog content
- 📂 **File Storage** — Upload cover images for posts using Appwrite Storage
- 🗄️ **Database** — Store and retrieve blog posts via Appwrite Database
- 📖 **Read All Posts** — Browse posts from all users on a public feed
- 👤 **User Dashboard** — Manage your own posts (edit / delete)
- 🎨 **Smooth Animations** — Page transitions and UI animations with Framer Motion
- 📱 **Responsive Design** — Fully mobile-friendly using Tailwind CSS
- 🌙 **Clean UI** — Polished component library powered by Material UI

---

## 📁 Project Structure

```
WriteStack/
├── public/
│   └── vite.svg
├── src/
│   ├── appwrite/
│   │   ├── auth.js          # Appwrite authentication service
│   │   ├── config.js        # Appwrite DB & Storage service
│   │   └── appwriteConfig.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostForm.jsx
│   │   └── AuthLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── AllPosts.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── Post.jsx
│   ├── store/
│   │   ├── store.js
│   │   └── authSlice.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)
- An [Appwrite](https://appwrite.io/) account (free tier works!)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kanchankahar23/WriteStack.git
   cd WriteStack
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) section).

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**

   ```
   http://localhost:5173
   ```

---

## ☁️ Appwrite Setup

1. Go to [Appwrite Cloud](https://cloud.appwrite.io/) and create a free account.
2. Create a new **Project** and note your **Project ID**.
3. Go to **Auth** → Enable **Email/Password** authentication.
4. Go to **Databases** → Create a new database and collection for blog posts with the following attributes:
   - `title` (string)
   - `content` (string)
   - `slug` (string, unique)
   - `featuredImage` (string)
   - `status` (string — `active` / `inactive`)
   - `userId` (string)
5. Go to **Storage** → Create a new bucket for post images.
6. Set appropriate **permissions** on your collection and bucket (allow read for `any`, write for authenticated users).

---

## 🔑 Environment Variables

Create a `.env` file in the root of your project:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

> ⚠️ **Important:** Never commit your `.env` file to GitHub. Make sure it is listed in `.gitignore`.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👩‍💻 Author

**Kanchan Kahar**

- 🎓 MCA Final Year Student — Shri Ram Institute of Technology, Jabalpur
- 💼 Frontend Developer Intern — White Force, Jabalpur
- 🌐 GitHub: [@kanchankahar23](https://github.com/kanchankahar23)

---

<div align="center">
<!-- center -->
</div>