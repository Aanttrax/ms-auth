# 🛡️ Authentication Microservice

A **secure and scalable authentication microservice** built with **TypeScript**, **Express**, and **MongoDB**. This project implements robust features such as user registration, login, token-based authentication with **JWT**, and password hashing using **bcrypt**.

## 🚀 Features

- 🛡️ **JWT-based Authentication**: Secure access with access and refresh tokens.
- 🔒 **Password Hashing**: Uses bcrypt for secure password storage.
- 📦 **RESTful API**: Clean and reusable API endpoints.
- 🧩 **Modular Code Structure**: Clean and scalable architecture.
- 📄 **Environment Variables**: Configurable via `.env` file.

---

## 📂 Project Structure
```
├── src 
│ ├── controllers # API controllers 
│ │ ├── database # API database 
│ │ └── schemas # Mongoose schemas 
│ ├── environment # environments dev and prod 
│ ├── helpers # Helper functions 
│ │ ├── mappers # mappers
│ │ └── utilities # utilities
│ ├── interface # interfaces and types
│ ├── routes # Express routes 
│ ├── server.ts # Server entry point 
│ │ ├── app.ts # Express app setup 
│ │ └── db.ts # Mongo configuration
│ └── index.ts # App configuration
├── .env # Environment variables 
├── tsconfig.json # TypeScript configuration 
├── package.json # Dependencies and scripts 
└── README.md # Project documentation
```
---
## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aanttrax/ms-auth.git
   cd auth-microservice
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables: Create a .env file in the root directory and add the following:  
   ```javascript
   PORT=3100
   HOST=0.0.0.0
   MONGO_USER=*****
   MONGO_PWD=********
   MONGO_HOST=*******************
   MONGO_DB_NAME=************
   MONGO_OPTIONS=********************
   TOKEN_SECRET=**********
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
---
## 🔗 API Endpoints

1. User Registration

    - POST `/signup`
    - Request Body:
        ```json
        {
          "userName": "john_doe",
          "password": "prueba",
          "name": "john",
          "lastName": "Doe",
          "email": "john@example.com"
         }
        ```
    - Response:
        ```json
        {
          "success": true,
          "response": "user created"
        }
        ```
2. User Login
    - POST `/signin`
    - Request Body:
        ```json
        {
         "email": "Halie.Collins@yahoo.com",
         "password": "prueba"
        }
        ```
    - Response:
        ```json
        {
         "success": true,
         "response": "logged-in user"
        }
        ```
---
## 🤝 Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## 🌟 Acknowledgements

- Express.js - Web framework for Node.js.
- TypeScript - Typed JavaScript at any scale.
- MongoDB - Database for modern applications.
- Bcrypt - Password hashing library.
- Jsonwebtoken - JWT implementation for authentication.

<!-- ## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details. -->

