const express = require('express');
const axios = require('axios')
const app = express();

app.get("/gif", (req, res) => {
  let search = req.query.search;
  let data;
  let output = [];
  axios
    .get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC`)
    .then(resp => {
      // console.log(resp.data.data[0].images.original.url);
      let data = resp.data.data;
      data.forEach(el => {
        let url = el.images.original.url;
        let idx = url.split("").indexOf("?");
        cleanUrl = url.slice(0,idx);
        output.push(cleanUrl)
      })
    })
    .catch(err => {
      console.log(err);
    })
    .then(() =>{
      res.send(output);
    })

  });

app.listen(3000, () => {
  console.log("you are listening to port 3000");
});
