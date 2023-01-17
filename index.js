const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/getlist", function (req, res) {
  res.send({
    Sensor_suhu: [
      { suhu: 30, waktu: "2023-01-01 11:00" },
      { suhu: 38, waktu: "2023-01-05 11:30" },
      { suhu: 24, waktu: "2023-01-07 12:00" },
      { suhu: 34, waktu: "2023-01-08 12:00" },
    ],
  });
});

app.listen(port);
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