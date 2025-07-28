require('dotenv').config();

const express = require('express'),
  app = express(),
  PORT = 2501,
  cors = require('cors')
app.use(cors())
app.use(express.json())
