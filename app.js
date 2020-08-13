const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
  console.log('Server is up and running on 3000');
})
