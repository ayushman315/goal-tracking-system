# Technical Design Document

---

## Overview

The technical design document outlines the architecture and database design for the project. It provides an overview of the system's components, their interactions, and the data schema used to store and manage information.

## Architecture

The project follows a client-server architecture, where the frontend (client) interacts with the backend (server) through HTTP requests. The backend is responsible for handling data storage, business logic, and authentication, while the frontend focuses on user interface and interaction.

### Backend Architecture

- **Node.js**: Backend runtime environment for executing JavaScript code.
- **Express.js**: Web application framework for building robust and scalable APIs.
- **MongoDB**: NoSQL database used for storing application data.
- **JSON Web Tokens (JWT)**: Used for user authentication and authorization.
- **Middleware**: Custom middleware for authentication and error handling.
- **API Endpoints**: RESTful endpoints for CRUD operations on resources.

### Frontend Architecture

- **React.js**: JavaScript library for building user interfaces.
- **Components**: Modular UI elements for composing the application's views.
- **State Management**: Local state management using React hooks and context API.
- **API Integration**: Axios library for making HTTP requests to the backend.
- **Routing**: React Router for client-side routing and navigation.

## Database Design

### MongoDB Schema

The MongoDB database schema consists of collections to store different types of data used in the application.

1. **Users Collection**:
   - `_id`: Unique identifier for the user.
   - `username`: User's username.
   - `email`: User's email address.
   - `password`: Hashed password for user authentication.

2. **Goals Collection**:
   - `_id`: Unique identifier for the goal.
   - `user_id`: Reference to the user who created the goal.
   - `title`: Title of the goal.
   - `description`: Description of the goal.
   - `min_timeline`: Minimum timeline for achieving the goal.
   - `max_timeline`: Maximum timeline for achieving the goal.
   - `user_timeline`: User-defined timeline for achieving the goal.

3. **Tasks Collection**:
   - `_id`: Unique identifier for the task.
   - `goal_id`: Reference to the goal associated with the task.
   - `title`: Title of the task.
   - `description`: Description of the task.
   - `quantity`: Quantity of the task.
   - `frequency`: Frequency of the task (daily, weekly, etc.).
   - `days_of_week`: Days of the week for specific-day tasks.
   - `reminder`: Reminder time for the task.

4. **Logs Collection**:
   - `_id`: Unique identifier for the log.
   - `user_id`: Reference to the user who logged the task.
   - `task_id`: Reference to the task associated with the log.
   - `timestamp`: Timestamp of when the log was created.
   - `status`: Status of the task (completed or missed).

## Conclusion

The technical design document provides a comprehensive overview of the project's architecture and database design. It serves as a reference for developers and stakeholders involved in the project's implementation and maintenance.

