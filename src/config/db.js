const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('PostgreSQL Connected via Prisma...');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
};

module.exports = { prisma, connectDB };
