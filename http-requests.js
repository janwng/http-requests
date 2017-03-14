var request = require('request');
var fs = require('fs');


console.log('Downloading picture...');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (error) {
    throw err;
  })
  .on('reponse', function (response) {
    console.log('Response Status Code: ', response.statusCode);
    console.log('Response Message: ', response.statusMessage);
    console.log('Response Content Type: ', response.headers['content-type']);
  })
  .on('end', function (end) {
    console.log('Download Complete...');
  })
  .pipe(fs.createWriteStream('./future.jpg'));