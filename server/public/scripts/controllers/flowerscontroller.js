app.controller('FlowersController', ['$scope', '$http', function($scope, $http) {
  console.log('FlowersController running');

  $scope.flowers = [];

  getFlowers();

  function getFlowers() {
    $http.get('/accents')
      .then(function(response){
        console.log(response);
        scope.floralAccents = response.data;
      });
  }

}]);
