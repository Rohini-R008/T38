# JWT Authentication App

## Description

This project is a simple authentication system built using Express.js and React. It uses JSON Web Tokens (JWT) for user authentication. The application allows users to register, login, and access a protected route only if they have a valid token.

## Features

### Backend (Express.js)

* User registration (/register)
* User login (/login)
* JWT token generation on successful login
* Protected route (/protected) using middleware
* Stores user data in an array (no database used)

### Frontend (React)

* Registration form
* Login form
* Stores JWT token in localStorage
* Access protected route using stored token

## Technologies Used

* Node.js
* Express.js
* React.js
* JSON Web Token (JWT)
* Axios

## How to Run the Project

### Step 1: Clone or Download

Download the project folder and open it in VS Code.


### Step 2: Run Backend

```bash
cd backend
npm install
node server.js
```

The backend will run on:
http://localhost:5000


### Step 3: Run Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

The frontend will run on:
http://localhost:3000

## How to Use

1. First register a new user using the Register form
2. Then login using the same credentials
3. After login, a JWT token will be stored in localStorage
4. Click on "Access Protected Data" to test the protected route

## Notes

* This project uses in-memory storage, so data will be lost when the server restarts
* Passwords are stored in plain text (only for learning purpose)
* JWT expires after 1 hour

## Folder Structure

```
jwt-auth-app/
│
├── backend/
│   └── server.js
│
├── frontend/
│   └── src/
│       ├── App.js
│       ├── Register.js
│       ├── Login.js
│       └── Protected.js
│
└── README.md
```

## Conclusion

This project helped me understand how authentication works using JWT and how frontend and backend communicate securely.
