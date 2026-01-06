# Class 25: Authentication & Authorization in Node.js

Welcome to Class 25! Today, we will learn how to secure our applications by identifying users (**Authentication**) and controlling what they can access (**Authorization**).

---

## 🔑 1. Core Concepts: Auth vs. Auth

Before writing any logic, it's crucial to understand the difference between these two:

| Concept | Question it Answers | Example |
| :--- | :--- | :--- |
| **Authentication (AuthN)** | Who are you? | Logging in with Email & Password. |
| **Authorization (AuthZ)** | What are you allowed to do? | An Admin can delete users, but a Customer cannot. |

---

## 🌍 2. Popular Authentication Methods

There are several ways to verify a user's identity. Here is a breakdown of the most common methods:

| Method | How it Works | Popularity | Why use it? |
| :--- | :--- | :--- | :--- |
| **Session-based** | Server stores a session ID; Client stores a Cookie. | High (Traditional) | Great for Server-Side Rendered (SSR) apps; secure for browsers. |
| **Token-based (JWT)** | Server issues a signed token (JWT); Client stores it. | **Most Popular** | Stateless, works across Mobile & Web, excellent for APIs/MERN stack. |
| **OAuth 2.0 / OpenID** | Log in via Google, Facebook, or GitHub. | High (Social Login) | Fast for users (no new password), trusted, and extremely secure. |
| **Passwordless** | Verification via Magic Link (Email) or OTP (SMS). | Growing | Reduces friction; users don't need to remember passwords. |
| **Biometric (MFA)** | Fingerprint, FaceID, or Authenticator App. | Very High (Added Layer) | The most secure way to prevent unauthorized access. |

---

## 🏢 3. How the "Giants" do it vs. Normal Apps

### 🚀 Big Tech Giants (Google, Facebook, Amazon)
- **Centralized Auth (SSO)**: One login (Google Account) gives you access to Gmail, Drive, YouTube, etc. This is called **Single Sign-On (SSO)**.
- **Identity Providers (IdP)**: They act as the "source of truth" for identity across the entire internet.
- **Extreme Scale**: They use distributed systems to verify millions of logins per second without delay.

### 📱 Normal Applications (E-commerce, Blogs, SaaS)
- **Localized Auth**: You create an account specifically for that one app.
- **Standard Stack**: Usually use **JWT** or **Sessions** connected to a local database (like MongoDB or PostgreSQL).
- **Cost-Effective**: Focus on securing their specific user data without needing massive global infrastructure.

---

## 🪜 4. Auth Levels Simplified (For Students)

To make it easy, think of Auth like entering a high-security building:

1. **Gate 1: Registration** (Making your ID Card)
   - You provide your details, and the building manager hashes (hides) your secret info in their records.
2. **Gate 2: Login** (Showing your ID Card)
   - You show your secrets. The manager checks if they match the hidden records.
3. **Gate 3: Token Generation** (Getting a Visitor Badge)
   - If you're "the guy," you get a signed badge (JWT) to wear on your chest.
4. **Gate 4: Authorization Middleware** (The Security Guard)
   - A guard stands at every private door. They check your badge before letting you in.
5. **Gate 5: Access** (Entering the Room)
   - You're in! You can now see the private data in that specific room.


Types of Authentication

There are 8 main types of authentication you should know:
	1.	Password-Based Authentication
	•	Username & password
	•	Most common method
	2.	OTP (One-Time Password)
	•	Email OTP / SMS OTP
	•	Time-based verification
	3.	Session-Based Authentication
	•	Server stores session
	•	Browser stores session ID
	4.	Token-Based Authentication
	•	JWT (JSON Web Token)
	•	Used in APIs and mobile apps
	5.	OAuth / Social Login
	•	Login with Google, Facebook, GitHub
	6.	Multi-Factor Authentication (MFA)
	•	Password + OTP
	•	Extra security layer
	7.	Biometric Authentication
	•	Fingerprint, Face
   
---

## 🛠️ 5. The Implementation Lifecycle

We will implement this in 6 logical steps using **Express**, **MongoDB (Mongoose)**, **Bcrypt**, and **JWT**.

### Step 1: Project Initialization
1. Initialize a new Node.js project.
2. Install necessary packages:
   - `express`: Our web server framework.
   - `mongoose`: To interact with MongoDB.
   - `bcryptjs`: To hash and secure passwords.
   - `jsonwebtoken`: To generate and verify security tokens.
   - `dotenv`: To manage sensitive environment variables.

### Step 2: The User Model (Database Schema)
We need a structure to store user information.
- **Fields**: `email` (unique) and `password`.
- **Hashing**: NEVER store plain-text passwords. We use a **Pre-Save Hook** in Mongoose to hash the password using `bcrypt` before it hits the database.

### Step 3: Registration Logic (Sign Up)
1. Receive `email` and `password` from the user.
2. Check if the user already exists in the database.
3. Save the new user (the password hashes automatically due to our model hook).
4. Return a success message.

### Step 4: Login Logic (Sign In & Token Generation)
1. Receive `email` and `password` from the login form.
2. Find the user in the database by their email.
3. **Password Verification**: Use `bcrypt.compare()` to check if the provided password matches the hashed password in the DB.
4. **Issue JWT**: If credentials are valid, generate a **JSON Web Token (JWT)**.
   - The token contains the user's ID.
   - The token is signed with a "Secret Key" that only your server knows.

### Step 5: Authorization Middleware (The Gatekeeper)
We need a reusable "check" to protect our routes.
1. Create a function that intercepts requests.
2. Look for a token in the **Headers** (usually `Authorization: Bearer <token>`).
3. Verify the token using your "Secret Key".
4. If valid, allow the request to proceed; otherwise, send a "401 Unauthorized" error.

### Step 6: Protecting Private Routes
Apply your gatekeeper middleware to any route that should be private (like a Profile page or Dashboard).
- The middleware ensures that only users with a valid token can see the data.

---

## 🛡️ 6. Security Best Practices for Students

1. **Environmental Variables**: Always store your `JWT_SECRET` and `MONGO_URI` in a `.env` file. Never commit them to GitHub!
2. **Salt Rounds**: Use a salt round of 10-12 for Bcrypt hashing to balance security and performance.
3. **Token Expiry**: Always set an expiration time for JWTs (e.g., `1h` or `7d`) so they aren't valid forever if stolen.
4. **Error Messages**: Don't be too specific (e.g., say "Invalid credentials" instead of "Password is wrong") to prevent attackers from guessing emails.

---

## 🚀 7. How to Test Your Flow

1. **Register**: Use Postman to `POST` to `/register`.
2. **Login**: `POST` to `/login` and copy the `token` from the response.
3. **Access Private Data**: `GET` a protected route, adding the token to the `Authorization` header.

---

### 📝 Classroom Task
*Try to draw the flow of a JWT on the whiteboard. Start from the Login request and end with a Protected Route request.*
