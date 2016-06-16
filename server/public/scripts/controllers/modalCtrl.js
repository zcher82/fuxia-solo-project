app.controller('ModalCtrl', ['$modalInstance', '$scope', function ($modalInstance, $scope) {
  var vm = this;

  $scope.closeModal = function () {
    $modalInstance.close();
  };

}]);
