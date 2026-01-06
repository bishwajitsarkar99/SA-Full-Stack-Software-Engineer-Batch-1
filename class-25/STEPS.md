# Implementation Steps: Full-Stack Auth Demo

This guide explains the step-by-step implementation of the Authentication Demo project using Node.js (Backend) and Next.js (Frontend).

---

## 🏗️ 1. Backend Implementation (Node.js + SQLite)

### Step 1.1: Project Setup & MVC Folders
We follow the **Model-View-Controller (MVC)** pattern for clean code, using **Functions** instead of classes for simpler logic.
- `src/models`: Exported functions for data queries (SQLite).
- `src/controllers`: Exported functions for business logic.
- `src/routes`: Defines API endpoints.
- `src/middleware`: Handles security checks.


### Step 1.2: Database Configuration
We use `sqlite3` to store users and notes.
- **Table 1: `users`** (Stores email and hashed passwords).
- **Table 2: `notes`** (Stores titles, content, and the `user_id` it belongs to).

### Step 1.3: Authentication Logical Flow
We implemented two flows:
1.  **Session-based**: The server creates a session and sends a cookie to the browser.
2.  **JWT-based**: The server signs a token (JWT) and sends it to the client. The client stores it (LocalStorage) and sends it in the `Authorization` header.

### Step 1.4: Protected Routes
We created middlewares to check for identity:
- `sessionAuth`: Checks if `req.session.userId` exists.
- `jwtAuth`: Verifies the token using `jwt.verify()`.

---

## 🎨 2. Frontend Implementation (Next.js)

### Step 2.1: API Service Layer
We use **Axios** to communicate with the backend.
- We configured an interceptor to automatically add the `Authorization: Bearer <token>` header if a JWT token is found in LocalStorage.

### Step 2.2: Auth Selection Logic
In the `Login.tsx` component, we added a toggle.
- If **JWT** is selected, we store the token after login.
- If **Session** is selected, we rely on the browser's cookies (using `withCredentials: true`).

### Step 2.3: Dashboard & CRUD
After login, the user can:
- **Create Notes**: Sent to the backend with either a session cookie or a JWT.
- **Read Notes**: Fetched specifically for the logged-in user.
- **Delete Notes**: Securely verified by the backend.

---

## 📝 3. Classroom Talking Points

1.  **Why hash passwords?** Explain that `bcrypt` makes it impossible to read passwords even if the database is leaked.
2.  **Stateless vs. Stateful**: Show how JWT (Stateless) doesn't need a session on the server, while Session (Stateful) does.
3.  **Network Tab**: Ask students to open the Network Tab in Chrome to see the difference between a `Set-Cookie` header (Session) and a `token` in the JSON response (JWT).
