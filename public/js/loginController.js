angular.module("MobileApp").controller("loginController", function($scope) {

  var socket = io.connect("http://localhost");
  
  socket.on("greeting", function(data) {
    console.log(data);
  });
  
  $scope.user = {email: "", password: ""};
  
  $scope.login = function() {        
    socket.emit("logging", {data: $scope.user}); 
  }
    
});
