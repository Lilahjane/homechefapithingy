const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

const corsOptions = {
    origin: '*'
  };
  app.use(cors(corsOptions));
// Load your JSON data
const jsonData = require('./recipes_data.json');

// Define an endpoint to return the JSON data
app.get('/HomeChefRecipes', (req, res) => {
    res.json(jsonData);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});