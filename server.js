var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require("socket.io").listen(server);

server.listen(3030);

app.use(express.static(__dirname + "/public"));
app.use('/lib', express.static(__dirname + "/bower_components"));

io.sockets.on("connection", function(socket) {
  socket.emit("greeting" , {data: "welcome to ht eserver!"});
  socket.on("event", function(data) {
    console.log(data);
  })
});
