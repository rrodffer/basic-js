const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

// mongoose.connect(process.env.MONGO_URL,
//   {useNewUrlParser: true, useUnifiedTopology: true}, () => {
//   console.log('-------------------------');
//   console.log('Banco de dados conectado!');
//   console.log('-------------------------');
// });

const testRoute = require('./src/routes/test');

app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

app.use('/api/test', testRoute);

app.listen(8800, () => {
  console.log('Backend iniciado! 🤖')
})