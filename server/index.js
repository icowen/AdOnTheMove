const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

const items = require('../routes/api/items');
app.use('/api/items', items);

const db = require(`${__dirname}/../config/keys`).mongoURI;
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Mongo Connection failed: ', err));

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});