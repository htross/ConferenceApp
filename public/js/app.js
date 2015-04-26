var googleGeocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=%addr%&key=AIzaSyC6K0lfOXQbVuatvK1NAxpng5eaUBBcd6M';

(function() {
    var app = angular.module('conference', []);
    //Controller in change of what is displayed to user

    //Controller in charge of api calls/data assoicated with top 10 cities
    app.controller('TopTenController', ['$scope', '$http', '$timeout', function (sc, $http, $timeout) {


        sc.data = {};
        sc.show = true;
        sc.form = {};
        sc.formPhone = {};


        sc.emptyPhoneForm = function() {
            sc.formPhone = {};
        };


        sc.checkTimes = function($scope) {


            var flights;

            var startDate = sc.form.startYear + "-" + sc.form.startMonth + "-" + sc.form.startDay;
            var endDate = sc.form.endYear + "-" + sc.form.endMonth + "-" + sc.form.endDay;

            $http.get('/amadeus/flights/' + startDate + '/' + endDate +'/BOS').
                success(function(data, status, headers, config) {
                    console.log('success');
                    flights = data.results;


                    //If this app were going into prod we would join the hotel location with the flight location
                    //Here I am hardcoding the Lat Long for Brown University, only so much you can do in 24h :(
                    $http.get('/amadeus/hotels/' + startDate + '/' + endDate + '/41.826/-71.403').
                        success(function(data, status, headers, config) {

                            console.log('success');
                            var cheapestHotel = parseFloat(data.results[0].total_price.amount);
                            console.log('cheap hotel: ' + cheapestHotel);

                            var considerations = Math.min(10, flights.length);

                            for (var i = 0; i < considerations; i++) {
                                flights[i].cheapestHotel = cheapestHotel;
                                console.log(flights[i]);

                            }

                            //Hardcode had difficulty finding an api which supports airport code loopup

                            flights[0].destination = "Las Vegas";
                            flights[1].destination = "Phoenix";
                            flights[2].destination = "Los Angeles";
                            flights[3].destination = "Santa Ana";
                            flights[4].destination = "Portland";
                            flights[5].destination = "Salt Lake City";
                            flights[6].destination = "San Diego";
                            flights[7].destination = "Seattle";
                            flights[8].destination = "Chicago";
                            flights[9].destination = "Houston";

                            for(var i = 0; i < 10; i++) {

                            }

                            sc.data = flights;
                            sc.show = false;


                        }).
                        error(function(data, status, headers, config) {
                            alert("Flight API Call Failed");
                        });
                }).
                error(function(data, status, headers, config) {
                    alert("Flight API Call Failed");
                });

        };
    }]);

})();