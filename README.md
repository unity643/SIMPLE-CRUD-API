# SIMPLE CRUD API

A RESTful Backend API built with Node.js, Express.js, and MongoDB. This project demonstrates authentication, product management, image uploads, external API integration, and Todo management.

## Features

* User Authentication

  * User Registration
  * User Login
  * JWT Authentication
  * Protected Routes

* Product Management

  * Create Product
  * Get All Products
  * Get Single Product
  * Update Product
  * Delete Product

* Image Upload

  * Multer Integration
  * Cloudinary Image Storage

* Todo Management

  * Create Todo
  * Get Todos
  * Update Todo
  * Delete Todo

* External API Integration

* MongoDB Database Integration

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer
* Cloudinary
* dotenv
* Git & GitHub

## Project Structure

```text
config/
controllers/
middleware/
models/
routes/
index.js
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd SIMPLE-CRUD-API
```

Install dependencies:

```bash
npm install
```

Create a .env file and add:

```env
PORT=2000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the development server:

```bash
npm run dev
```

## API Endpoints

### Authentication

```http
POST /auth/signup
POST /auth/login
```

### Products

```http
GET /products
GET /products/:id
POST /products
PUT /products/:id
DELETE /products/:id
```

### Todos

```http
GET /todos
POST /todos
PUT /todos/:id
DELETE /todos/:id
```

## Learning Outcomes

Through this project, I gained practical experience in:

* Building REST APIs
* MongoDB Database Design
* Authentication with JWT
* File Upload Handling
* Cloudinary Integration
* Middleware Development
* Git and GitHub Workflow
* API Testing
* Error Handling
* Backend Project Structure

## Author

Ogbuka chibuike

Backend Developer | Node.js | Express.js | MongoDB


https://github.com/unity643
https://www.linkedin.com/in/ogbuka-chibuike-37b731392/
