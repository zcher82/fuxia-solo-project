app.controller('FlowersController', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
  console.log('FlowersController running');

  $scope.flowers = [];
  $scope.samples = [];  //array holding only the first image from EACH flower object
  $scope.photos = [];   //array holding ALL flower images from EACH flower object

  getFlowers();

  function getFlowers() {
    $http.get('/flowerdb')
      .then(function (response) {
        $scope.flowers = response.data;
        console.log($scope.flowers);

        angular.forEach($scope.flowers, function (value) { //for each object(flower) in the returned array, do this function
          /*console.log(value.images[0]);*/
          $scope.samples.push(value.images[0]); //pushing ONLY the FIRST image of each object to $scope.samples array

          //now we go through each original flower object to push ALL the photos
          //into $scope.photos array to use with preview function
          angular.forEach(value.images, function (value) {
            $scope.photos.push(value);
            /*console.log($scope.photos);*/
          });
        });


      });
  }

  $scope.displayFlowerModal = function() {
    var modalInstance = $modal.open({
      templateUrl: '../views/modalView.html',
      controller: 'ModalCtrl',
      resolve: {
        data: function() {
          return $scope.flowers;
        }
        /*firstName: function() {
          return "zeng";
        },
        lastName: function() {
          return "her";
        }*/
      }
    });
  };
}]);
