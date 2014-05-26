angular.module("MobileApp",[]).controller("loginController", function($scope) {
  
  return {
    login: function() {
      $.ajax({
        method: "GET",
        url: "/login"
      });
    }
  });
  
  $scope.login = 

});
