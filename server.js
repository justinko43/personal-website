const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

//server setup
const SERVER_PORT = process.env.port || 3000;
const app = express();

app.use(favicon(path.resolve(__dirname, '/build/assets/images', 'favicon.ico')));
app.use('/build', express.static(path.resolve(__dirname, '/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/build/index.html'));
});

app.listen(SERVER_PORT, () => {
  console.log(`APP IS LISTENING TO PORT: ${SERVER_PORT}`);
});