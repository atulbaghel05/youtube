var http = require("http");
var path = require("path");
var express = require("express");
var router = express();
var server = http.createServer(router);

router.use('/client', express.static(path.resolve(__dirname, 'client')));

router.get("/data", function (req, res, next) {
  let seconds = Math.floor(Math.random()*4) + 1  // 1 to 4 seconds inclusive

  console.log("waiting seconds before responding", seconds);
  
  return setTimeout(function () {
    return res.json({ response: "response message after seconds: " + seconds });
  }, seconds*1000);

});

server.listen(
  process.env.PORT || 3000,
  process.env.IP || "0.0.0.0",
  function () {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
  }
);
