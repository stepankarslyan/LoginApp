angular.module("MobileApp").controller("loginController", function($scope) {

  var socket = io.connect("http://localhost");
  
  socket.on("error", function(error) {
    $scope.$apply(function() {
      $scope.error = error;
    });
  });
  
  socket.on("success", function(url) {
    document.location = url;
  });
  
  $scope.user = {email: "", password: ""};
  
  $scope.login = function() {
    socket.emit("logging", $scope.user);      
  }
    
});
