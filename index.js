var randomWords = require('random-words');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());


app.get('/pelolo', (req, res) => {
  res.send(randomWords() + '\n');
});

app.post('/pelolo1', (req, res) => {
  var x = req.body;
  res.send("nomer yang akan menang adalah = " + req.body.nomor);
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});
// const http = require('http');
// var randomWords = require('random-words');

// console.log(randomWords());
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer(function(req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(randomWords()+'\n');
// });

// server.listen(port, hostname, function() {
//   console.log('Server running at http://'+ hostname + ':' + port + '/');
// });