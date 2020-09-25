const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
      callback(null, "Please enter valid breed")
    } else {
      console.log(data[0].description);
    }
  }
  });
};

module.exports = {fetchBreedDescription};


// console.log ('error:', error);
// console.log ('statusCode:', response && response.statusCode);
// console.log ('body: ' , body);