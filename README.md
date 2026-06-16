# Product CRUD API with Authentication and Authorization

## Overview

This is a backend REST API built with Node.js, Express.js, and MongoDB. The project started as a Product CRUD API and was later extended with authentication, authorization, and security features.

## Features

* Product CRUD Operations
* User Registration
* User Login
* Password Hashing with bcrypt
* JWT Authentication
* Role-Based Authorization (Admin/User)
* Protected Routes
* Environment Variables with dotenv
* Automated Admin Account Creation

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* JSON Web Token (JWT)
* dotenv

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Products

* GET /api/products
* GET /api/products/:id
* POST /api/products (Admin Only)
* PUT /api/products/:id (Admin Only)
* DELETE /api/products/:id (Admin Only)

## Environment Variables

Create a .env file and configure:

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

ADMIN_EMAIL=[admin@gmail.com](mailto:admin@gmail.com)

ADMIN_PASSWORD=your_admin_password

## What I Learned

Through this project I learned:

* Building REST APIs with Express.js
* Working with MongoDB and Mongoose
* Implementing JWT Authentication
* Protecting routes with middleware
* Implementing Role-Based Authorization
* Managing sensitive data using environment variables
* Testing APIs with Insomnia

## Future Improvements

* Product Image Upload with Cloudinary
* External API Integration
* Shopping Cart Functionality
* Order Management System
* Payment Integration

## Author

Ogbuka chibuike


https://github.com/unity643
https://www.linkedin.com/in/ogbuka-chibuike-37b731392/
