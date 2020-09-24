const request = require('request');
const args = process.argv.slice(2);

let url = 'https://fsdgdapi.thecatapi.com/v1/breeds/search?q=';
let argsString = args[0].toString();
url = url.concat(argsString);

request(url, (error, response, body) => {
  if (error) {
    console.log('Failed to make a request: ', error);
    return;
  }

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Breed not found! Please enter a valid breed');
  } else {
    console.log('Breed description: ', data[0].description);
  }
});


//console.log ('error:', error);
//console.log ('statusCode:', response && response.statusCode);
//console.log ('body: ' , body);