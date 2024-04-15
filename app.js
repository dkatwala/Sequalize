// app.js

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const Patient = require('./patient');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define routes for CRUD operations
app.get('/patients', async (req, res) => {
  const patients = await Patient.findAll();
  res.json(patients);
});

app.post('/patients', async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Other CRUD routes (PUT, DELETE) can be added similarly

// Initialize Sequelize and start the server
async function startServer() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();
