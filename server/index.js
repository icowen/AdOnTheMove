const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
});