const express = require('express');
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; 

app.use('/', express.static(__dirname + '/dist'));

app.get('*', function (request, response, next){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(port, () => {
  console.log(`server started on port at http://localhost:${port}`)
});
