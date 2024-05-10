# Sectify

 Sectify is a decentralized voting platform that leverages blockchain technology to revolutionize the way elections are conducted. By providing a secure, transparent, and accessible voting experience, Sectify aims to increase voter participation and restore confidence in the democratic process.


## Features

- User authentication: Register and log in to access the application.
- Voting Dashboard: Voters can cast their votes securely.


## Installation

To run the Sectify client locally, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/Tosmel2/Sectify-Voting.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Sectify-Voting/client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Access the application in your browser at `http://localhost:5173`.

## Usage

### User Authentication

- **Register**: Click on the "Register" button and fill in the required details to create a new account.
- **Log In**: Enter your email/username and password, then click on the "Log In" button to access the application.


## Dependencies

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web development.
- tailwindcss: A utility-first CSS framework for rapidly building custom designs.
- Axios: A promise-based HTTP client for making API requests.
- React Router: A routing library for React applications.


## Folder Structure

```
Sectify-Voting-frontend/
├── public/                 # Static assets
├── src/                    # Source files
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── layouts/            # Layout components
│   ├── styles/             # TailwindCSS styles
│   ├── App.js              # Main application component
│   ├── index.css           # Global styles
│   └── index.js            # Entry point
├── .gitignore              # Git ignore file
├── package.json            # npm package file
└── README.md               # Project README
```

```
Sectify-Voting-backend/
  ├── config/             # Config files
  ├── controller/         # The application logic controller
  ├── middleware/         # The middleware for authorization & authentication
  ├── models/             # The application structured models
  ├── routes/             # The application routes
  ├── smart-contracts/    # The application web3 smart contract
  └── utils               # The application utils
  └── .gitignore          # Git ignore file
  ├── package.json        # npm package file
  └── README.md           # Project README
```


# API Documentation (Server)

Sectify-voting is a decentralized voting platform that leverages blockchain technology to revolutionize the way elections are conducted

## Base URL

```
https://sectify.onrender.com/api/v1/
```

## Authentication

Sectify API uses JSON Web Tokens (JWT) for authentication. Users need to register and log in to obtain a JWT token, which they must include in the headers of subsequent requests.

### Register User

- **URL**: `/sign-up`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
  - `phone number` (string, required): User's phone number.
  - `email` (string, required): User's email address.
  - `password` (string, required): User's password.
- **Response**: 
  - Status: 201 - Created
  - JSON object containing:
    - `message`: "User registered successfully"
    - `token`: JWT token
    - `nextStep`: Next page URL

### Log In User

- **URL**: `/sign-in`
- **Method**: `POST`
- **Description**: Logs in an existing user.
- **Request Body**:
  - `VIN` (string): Generated Voters Identity Number.
  - `phone number` (string): User's phonenumber.
  - `password` (string, required): User's password.
- **Response**:
  - Status: 200 - OK
  - JSON object containing:
    - `message`: "User login successful!"
    - `nextStep`: Next page URL
    - `token`: JWT token

### Update User Details

- **URL**: `/users/:userId`
- **Method**: `PUT`
- **Description**: Updates user details.
- **Request Parameters**:
  - `userId` (string, required): User ID.
- **Request Body**:
  - `email` (string): User's new email address.
- **Response**:
  - Status: 200 - OK
  - JSON object containing:
    - `message`: "User details updated successfully"

### Reset User Password

- **URL**: `/users/:userId/resetpassword`
- **Method**: `PUT`
- **Description**: Resets user password.
- **Request Parameters**:
  - `userId` (string, required): User ID.
- **Request Body**:
  - `oldPassword` (string, required): User's old password.
  - `newPassword` (string, required): User's new password.
  - `confirmNewPassword` (string, required): Confirm new password.
- **Response**:
  - Status: 200 - OK
  - JSON object containing:
    - `message`: "Password reset successfully"

## Voting -Dashboard

Sectify dashboard endpoints allow users to casttheir votes securely using the decentralize system voting as each block of votes is stored in the blockchain.

```
live link: https://sectify.vercel.app/
```