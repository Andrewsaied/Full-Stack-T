const axios = require('axios');
const express = require('express');
const {random} = require('lodash');
const g = express.Router()


g.get('/watchlist',(req,res)=>{
    var options = {
        method: 'GET',
        url: 'https://data-imdb1.p.rapidapi.com/genres/',
        headers: {
          'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
          'x-rapidapi-key': 'e4d18ddcf8msh9efae0de4593b4bp19b390jsn48b6a9a2e4d8'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data.Genres[0]);
          res.render('watchlist',{list:response.data.Genres,title:"Rating"})
      }).catch(function (error) {
          console.error(error);
      });
    
});

module.exports = g
