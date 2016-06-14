app.controller('FloralAccentsController', ['$scope', '$http', function($scope, $http) {
  console.log('FloralAccentsController running');

  $scope.accents = [];
  $scope.greens = [];

  getAccents();
  getGreens();

  function getAccents() {
    $http.get('/accents')
      .then(function(response){
        console.log(response);
        $scope.accents = response.data;
      });
  }

  function getGreens() {
    $http.get('/accents/green')
      .then(function(response){
        console.log(response);
        $scope.greens = response.data;
      });
  }

}]);
