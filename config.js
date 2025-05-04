import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

export const config = {
  mongoUri: process.env.MONGO_URI,  // Accessing the Mongo URI from the environment
};
