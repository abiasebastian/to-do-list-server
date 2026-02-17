const { prisma } = require('../config/db');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Creates a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ msg: 'Title is required' });
        }

        const newTask = await prisma.task.create({
            data: {
                title,
                description
            }
        });

        res.json(newTask);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, isCompleted } = req.body;

        const task = await prisma.task.findUnique({
            where: { id }
        });

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                title: title !== undefined ? title : undefined,
                description: description !== undefined ? description : undefined,
                isCompleted: isCompleted !== undefined ? isCompleted : undefined
            }
        });

        res.json(updatedTask);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await prisma.task.findUnique({
            where: { id }
        });

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        await prisma.task.delete({
            where: { id }
        });

        res.json({ msg: 'Task removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
