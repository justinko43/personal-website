const express = require('express');
const path = require('path');

//server setup
const SERVER_PORT = process.env.PORT || 3000;
const app = express();

app.use('/build', express.static(path.resolve(__dirname, './build')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(SERVER_PORT, () => {
  console.log(`APP IS LISTENING TO PORT: ${SERVER_PORT}`);
});