const express = require('express');
const app = express();
const port = 4000;

const Brand = require('./models/brand');


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/brand', (req, res) => {
    Brand.getAllBrands((err, brands) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching brands');
        } else {
          res.json(brands);
        }
      });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});