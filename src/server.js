const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const routes = require('./routes');

const app = express();
app.use(cors());

mongoose.connect(process.env.DB_ACCESS , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);