angular.module("MobileApp").controller("loginController", function($scope) {

  var socket = io.connect("http://localhost");
  
  socket.on("error", function(data) {
    $scope.$apply(function() {
      $scope.error = "Login failed!";
    });
    
  });
  
  $scope.user = {email: "", password: ""};
  
  $scope.login = function() {
    setTimeout(function() {        
      socket.emit("logging", {data: $scope.user}); 
      
    }, 5000);
  }
    
});
