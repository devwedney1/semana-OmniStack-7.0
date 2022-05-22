const express = require('express');

const app = express();

app.get('/', (req, res) =>{
  return res.send('Heloo World')
});

app.listen(3333);