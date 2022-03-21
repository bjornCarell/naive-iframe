const express = require('express');
const open = require('open');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

open('http://localhost:3000/');

