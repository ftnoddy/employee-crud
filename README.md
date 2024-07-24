# Employee Management API

This is an Employee Management API built with Node.js, Express, and MongoDB. It allows you to perform CRUD operations on employee data, including creating, reading, updating, and deleting employees. Additionally, it includes a route to get employees with a salary less than 10,000.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- Create a new employee
- Get all employees
- Update an employee by ID
- Delete an employee by ID
- Get employees with salary less than 10,000

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors
- cookie-parser

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/employee-management-api.git
    cd employee-management-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add your MongoDB URI:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/employeeDB
    ```

4. Start the server:

    ```bash
    npm run server
    ```

    The server will be running on `http://localhost:5000`.

## API Endpoints

### Base URL: `http://localhost:5000/api`

- **Get all employees**

  ```http
  GET /users/employee
