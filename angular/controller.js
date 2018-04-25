var app = angular.module('myApp', []);
app.controller('appCtrl', ['$scope', '$http', function($scope, $http){
    console.log('hello from angular!');
}]);