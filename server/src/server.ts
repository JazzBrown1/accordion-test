import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import apiRoutes from './api/routes';

dotenv.config();

try {
  if (!process.env.APP_PATH) throw new Error('Env var APP_PATH is required');
  if (!process.env.PORT) throw new Error('Env var PORT is required');
  const { APP_PATH, PORT } = process.env;

  const app = express();

  // Apply full CORS policy
  app.use(cors());

  // Serve API routes
  app.use('/api/', apiRoutes);

  // Server React App - In full prod Id prefer to do this using nginx s3/elb
  app.use(express.static(path.join(__dirname, APP_PATH)));

  // Send 404
  app.use((r, res) => {
    res.sendStatus(404);
  });

  // Start App
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
