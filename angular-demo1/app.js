angular.module('weatherApp', [])  // name, [other modules to import / require]
    .service("weatherService", function($http, $q) {
        this.getWeather = function(cityName) {
            var deferred = $q.defer();
            $http({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=ed19b6e1c36cac7a0cf55d1d48d3c61&units=metric',
                method: 'GET'
                })
                //if request is successful
                .success(function(data,status,headers,config){
                    //resolve the promise
                    deferred.resolve(data.main.temp);

                })
                //if request is not successful
                .error(function(data,status,headers,config){
                    //reject the promise
                    deferred.reject('ERROR');
                });
            //return the promise
            return deferred.promise;

        };
    })
    .controller("weatherController", function(weatherService, $scope) {
        //console.log('weahter controller created!');
        $scope.description = "a simple weather app";
        var myPromise  = weatherService.getWeather("Chicago")
        myPromise.then(function(resolve){
            $scope.temp = resolve;
        },
        function(reject){
            $scope.temp = reject;
        });
    })
    .directive("weather", function() {
        return {
            restrict: "A",
            templateUrl: "weather.html"
        }
    });
