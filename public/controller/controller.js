var app = angular.module('myApp', [])

app.controller('myCtrl', function ($scope, $http) {

$scope.sendAppId = function(){
	$scope.value = "true" 
	navigator.geolocation.getCurrentPosition(function (position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var appId =$scope.AppId;
	// var appId = 'a63657f6ab79230f3ceeed08a4c29cdf';
	var url = `/weather?lat=${lat}&lon=${lon}&appId=${appId}`
		console.log(url)
   
		$http.get(url).then(function (response) {
			// console.log(response.data)
		  	$scope.description = response.data.description;
		  	$scope.speed = response.data.speed;
		  	$scope.cityname = response.data.cityname;
		  	$scope.cTemp = response.data.cTemp;
		  	$scope.fTemp = response.data.fTemp;
		  	$scope.icon = response.data.icon;
    	});
  	});
	};

    switch($scope.description){
    	case 'Clouds':{
    		$scope.weatherBackground = {
    			"background":"url('../img/Clouds.jpg')",
    			// "background":"url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/clearSky.jpg')",
    			"background-size":"cover"
    		};
    		break;
    	}
        case 'Rain':{
    		$scope.weatherBackground = {
    			"background":"url('../img/Rain.jpg')",
    			"background-size":"cover"
    		};
    		break;
    	}
    	case 'Snow':{
    		$scope.weatherBackground = {
    			"background":"url('../img/Snow.jpg')",
    			"background-size":"cover"
    		};
    		break;
    	}
       	case 'Extreme':{
    		$scope.weatherBackground = {
    			"background":"url('../img/Extreme.jpg')",
    			"background-size":"cover"
    		};
    		break;
    	}
    	default:
    		$scope.weatherBackground = {
    			"background":"url('../img/Clear.jpg')",
    			"background-size":"cover"
    		};
    	break;
    	
    }

})


