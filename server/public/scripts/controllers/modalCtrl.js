app.controller('ModalCtrl', ['$modalInstance', '$scope', 'data',
  function ($modalInstance, $scope, data) {
    $scope.data = data;
    console.log(data); //data is flowrs array
  $scope.closeModal = function () {
    $modalInstance.close();
  };

}]);
