// create web server
const express = require('express');
const app = express();
const port = 3000;

// import comments data
const comments = require('./comments');

// create a route for getting comments
app.get('/comments', (_req, res) => {
  res.send(comments);
});

// start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});