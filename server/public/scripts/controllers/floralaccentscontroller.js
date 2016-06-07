app.controller('FloralAccentsController', ['$scope', '$http', function($scope, $http) {
  console.log('FloralAccentsController running');

  $scope.floralAccents = [];

  getFloralAccents();

  function getFloralAccents() {
    $http.get('/accents')
      .then(function(response){
        console.log(response);
        scope.floralAccents = response.data;
      });
  }


  
