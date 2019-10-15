const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://sesi:sesieventos@sesi-eventos-iztyf.mongodb.net/flashclip?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);