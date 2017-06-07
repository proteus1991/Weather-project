var app = angular.module('myApp', [])

app.controller('myCtrl', function ($scope, $http) {

  	navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var appId = 'a63657f6ab79230f3ceeed08a4c29cdf';
    var url = `/weather?lat=${lat}&lon=${lon}&appId=a63657f6ab79230f3ceeed08a4c29cdf`
    $http.get(url).then(function (response) {
    	// console.log(response.data)
      	$scope.description = response.data.description;
      	$scope.speed = response.data.speed;
      	$scope.cityname = response.data.cityname;
      	$scope.cTemp = response.data.cTemp;
      	$scope.fTemp = response.data.fTemp;
      	$scope.icon = response.data.icon;

    switch($scope.description){
    	case 'Clouds':{
    		$scope.weatherBackground = {
    			"background":"url('../img/cloud.jpg')",
    			// "background":"url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/clearSky.jpg')",
    			"background-size":"cover"
    		};
    		break;
    	}
    }
    console.log($scope.weatherbackground)
    })
  })
})


