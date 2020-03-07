const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://StrikerEureka12:*mongoDB0612@clusterapi-av9rp.mongodb.net/omnistack10?retryWrites=true&w=majority', {
  useCreateIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(morgan('dev'));

app.listen(4000);
