//Create web server
const express = require('express');
const app = express();

//Create a route
app.get('/comments', (req, res) => {
  res.send('You have reached the comments route!');
});

//Start server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});