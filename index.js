require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose
  .connect(
    'mongodb+srv://andriusAdmin:mongo123@frankfurtclusteraws.9ltyw.mongodb.net/towns-and-cities?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  )
  .then((result) => {
    console.log(`backEnd connected on port ${PORT}`);
  })
  .catch((err) => {
    console.log('Connection error');
  });

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json('Server is running');
});

const apiRoutes = require('./api/apiRoutes');

// app.use('/', apiRoutes);

app.listen(PORT, console.log(`Back end online on port ${PORT}`));
