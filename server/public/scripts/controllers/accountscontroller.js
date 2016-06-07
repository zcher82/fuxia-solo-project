app.controller('AccountsController', ['$scope', '$http', function($scope, $http) {
  console.log('AccountsController running');

$scope.customers = [];  //"container" for the returned customer objects, which we'll use to populate customerTable
$scope.currentCustomer = {};  //"container" for each new customer that is created


//function to create a new customer once data has been entered and "create" button is clicked
$scope.submitCurrentCustomer = function() {

}

//function to get all customers from DB to populate the DOM
function getCustomers() {
  $http.get('/customers').then(function(response) {
    console.log(response);
    $scope.customers = response.data;
  });
}
