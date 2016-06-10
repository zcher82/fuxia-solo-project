app.controller('FlowerdbController', ['$scope', '$http', function($scope, $http) {
  console.log('FlowerdbController running');

  $scope.flowers = [];
  $scope.currentFlower = {};

  getFlowers();

  function getFlowers() {
    $http.get('/flowerdb')
      .then(function (response) {
        $scope.flowers = response.data;    //$scoped 'movies' here is the array...the returned data
        console.log('GET /flowers ', response.data);

      });
  }

  $scope.submitCurrentFlower = function () {
    var data = $scope.currentFlower;
    $http.post('/flowerdb', data)
      .then(function () {
        console.log('POST /flower');
        getFlowers();
        //clear input fields
        var $scc = $scope.currentFlower;
        $scc.name = "";
        $scc.description = "";
        $scc.symbolism = "";
        $scc.colorMeaning = "";
        $scc.image = "";
        $scope.flowerForm.$setPristine();
      });
  };

  $scope.deleteFlower = function (id) {
    console.log(id);
    $http.delete('/flowerdb/' + id)
      .then(function (response) {
        getFlowers();

      });
  };

}]);
