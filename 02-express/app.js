const express = require('express');
const app = express();

let { people } = require('./data')

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})