//servidor para o webhook e admin page
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => console.log('Express server is listening on port 5000'));

const verifyWebhook = require('./verify-webhook');

app.get('/', verifyWebhook);