const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());

const port = 5000; // Choose any available port
app.use(cors());
const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies1.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '551612c944msh6e61933e9213b7ep175b8ajsn5aa6407b6575',
    'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
  }
};

// Define your server endpoints
app.get("/movies", (req, res) => {
  axios
  .request(options)
  .then((response) => {
    res.json(response.data);
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});