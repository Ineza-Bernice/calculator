const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());
{
  "numbers"=[1, 2, 3, 4] ;
}

app.get('/sum', (req, res) => {
    const numbers = req.query.numbers;
     if (!numbers) {
      return res.status(400).send({ error: 'Numbers are missing in the request' });
    }
    const numbersArray = numbers.split(',').map(Number);
    const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    return res.send({ result: sum });
  });
  
  app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
  });