const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//connect to database
connectDB();

// app.use(logger);

//Body parser
app.use(express.json());

//route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

//Dev logging middleware
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}
//mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandles promise rejection
process.on('unhandledRejection', (err, promise) => {
  //close server and exit process
  server.close(() => process.exit(1));
});
