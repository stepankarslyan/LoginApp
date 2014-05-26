var express = require("express");
var app = express();
app.listen(3030);
var io = require("socket.io").listen(app);

app.use(express.static(__dirname + "/public"));

io.sockets.on("connection", function(socket) {
  socket.emit("greeting" , {data: "welcome to ht eserver!"});
  socket.on("event", function(data) {
    console.log(data);
  })
});
