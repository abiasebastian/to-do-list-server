const express = require('express');
const cors = require('cors');
const { connectDB } = require('./src/config/db');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
