app.controller('FlowersController', ['$scope', '$http', function($scope, $http) {
  console.log('FlowersController running');

  $scope.flowers = [];
  $scope.samples = [];
  $scope.photos = [];

  getFlowers();

  function getFlowers() {
    $http.get('/flowerdb')
      .then(function (response) {
        $scope.flowers = response.data;

        /*console.log('GET /flowers ', response.data);*/

        angular.forEach($scope.flowers, function (value) { //for each object(flower) in the returned array, do this function
          console.log(value.images[0]);
          $scope.samples.push(value.images[0]); //pushing ONLY the FIRST image of each object to $scope.samples array

          //now we go through each original flower object to push ALL the photos
          //into $scope.photos array to use with preview functiion
          angular.forEach(value.images, function (value) {
            $scope.photos.push(value);
            console.log($scope.photos);
          });
        });


      });
  }

}]);
