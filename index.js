const express = require('express');
const limiter = require('./src/utils/logger');
const corsOptions = require('./src/utils/logger');
const app = express();
const logger = require('./src/utils/logger');

const cors = require('cors');
const router = require('./src/app/routes');
const { connectToDatabase } = require('./src/config/database');

// Connect to the database
connectToDatabase();

const port = process.env.PORT || 3000;



// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Apply rate limit to all routes
app.use(limiter);

// Set up routes
app.use(router);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(`An error occurred: ${err.stack}`);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  logger.info(`Server is running and listening on port http://localhost:${port}`);
});
