# To-Do List Server

A robust backend API for the To-Do List application, built with Express and Prisma.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL

## Prerequisites
- Node.js

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment Setup:
   - Create a `.env` file in the root `server` directory.
   - Add your database connection string and port:
     ```env
     DATABASE_URL="*****"
     PORT=*****
     ```


## Usage

### Development
Start the server with Nodemon (auto-restart on changes):
```bash
npm run dev
```

### Production
Start the server in production mode:
```bash
npm start
```

## Testing with Postman

You can use Postman to test the API endpoints.

### Base URL
`http://localhost:5000`

### Endpoints

#### 1. Get All Tasks
- **URL**: `/api/tasks`
- **Method**: `GET`
- **Description**: Retrieves all tasks.

#### 2. Create a Task
- **URL**: `/api/tasks`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
  ```json
  {
    "title": "New Task",
    "description": "Task description"
  }
  ```

#### 3. Update a Task
- **URL**: `/api/tasks/:id`
- **Method**: `PUT`
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
  ```json
  {
    "title": "Updated Title",
    "isCompleted": true
  }
  ```
- **Note**: Replace `:id` with the actual UUID of the task.

#### 4. Delete a Task
- **URL**: `/api/tasks/:id`
- **Method**: `DELETE`
- **Note**: Replace `:id` with the actual UUID of the task.
