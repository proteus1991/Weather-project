var app = angular.module('myApp', [])

app.controller('myCtrl', function ($scope, $http) {

  	navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var appId = 'a63657f6ab79230f3ceeed08a4c29cdf';
    var url = `/weather?lat=${lat}&lon=${lon}&appId=a63657f6ab79230f3ceeed08a4c29cdf`
    $http.get(url).then(function (response) {
      $scope.myWelcome = response.data;
    })
  })
})
