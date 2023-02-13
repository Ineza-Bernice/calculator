const express = require('express');
const app = express();
const port = 5000;

app.get('/product', (req, res) => {
  const numbers = req.query.numbers;
  
  if (!numbers) {
    return res.status(400).send({ error: 'Numbers are missing in the request' });
  }
  const numbersArray = numbers.split(',').map(Number);
  const product = numbersArray.reduce((acc, curr) => acc * curr, 1);
  return res.send({ result: product });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});