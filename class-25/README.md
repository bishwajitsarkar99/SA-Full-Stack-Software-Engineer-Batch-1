# Class 25: Full-Stack Authentication Project

This project is a comprehensive teaching tool for Class 25, demonstrating **Session-based** and **JWT-based** authentication patterns in a MERN-style application.

## 🚀 Getting Started

### 1. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server (on port 5001):
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js app:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Overview

- **`backend/`**: Node.js + Express MVC architecture using SQLite.
  - Supports Session authentication (via Cookies).
  - Supports JWT authentication (via Bearer Tokens).
  - Includes Notes CRUD logic.
- **`frontend/`**: Next.js 14 App Router project with Tailwind CSS.
  - Features a Dashboard where you can toggle between Auth types.
  - Demonstrates how to send credentials/tokens in API requests.

## 📖 Lesson Resources

- **[TEACHING_GUIDE.md](./TEACHING_GUIDE.md)**: Conceptual guide on Auth types, industry standards (Big Tech), and simplified analogies.
- **[PROBLEMS_AND_LIMITATIONS.md](./PROBLEMS_AND_LIMITATIONS.md)**: Learn the real-world trade-offs and security issues of Sessions vs. JWT.
- **[STEPS.md](./STEPS.md)**: Detailed breakdown of the code and implementation logic.


---

## 🛠️ Troubleshooting
If you encounter a `sqlite3` binding error (especially on Mac ARM64), run:
```bash
npm rebuild sqlite3
```
This forces the native modules to re-link with your specific Node.js and OS version.
