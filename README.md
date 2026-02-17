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
