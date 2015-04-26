/**
 * Created by harrison on 4/16/2015.
 */
var express = require('express');
var request = require('request');
var app = express();

var apc = 'BDL';
var start = '2015-09-06';
var end = '2015-09-26';

var urlTemplateFlights =
    'http://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?origin=%airp%&departure_date=%start%--%end%&duration=7--9&max_price=500&apikey=bOWcTXLArDdjnfO4sEJU2kIKGK04fUfb';
var urlTemplateHotels =
    'http://api.sandbox.amadeus.com/v1.2/hotels/search-box?south_west_corner=%bottomLat%,%bottomLong%&north_east_corner=%topLat%,%topLong%&check_in=%startDate%&check_out=%endDate%&apikey=bOWcTXLArDdjnfO4sEJU2kIKGK04fUfb';

var urlAirportCodeConverter = 'http://airportcode.riobard.com/airport/%apc%?fmt=JSON'



app.use('/', express.static(__dirname + '/public/'));
app.listen(8080, function() {
    console.log("listening on port 8080");
});


app.get('/amadeus/flights/:startDate/:endDate/:origin', function(req, res) {

    var flightsURL = urlTemplateFlights.replace('%airp%', req.params.origin)
                                            .replace('%start%', req.params.startDate)
                                            .replace("%end%", req.params.endDate);

    request({url: flightsURL}, function(err, response, body) {
        if(err) {
            res.json(err);
        } else {
            res.json(JSON.parse(body));
        }
    });
});

app.get('/amadeus/hotels/:startDate/:endDate/:lat/:long', function(req, res) {


    console.log("lat: " + req.params.lat);
    console.log("long: " + req.params.long);

    var bottomLat = parseFloat(req.params.lat) - 0.1;
    var topLat = parseFloat(req.params.lat) + 0.1;
    var bottomLong = parseFloat(req.params.long) - 0.1;
    var topLong = parseFloat(req.params.long) + 0.1;

    var hotelsURL = urlTemplateHotels.replace('%bottomLat%', bottomLat)
                                        .replace('%bottomLong%', bottomLong)
                                        .replace('%topLat%', topLat)
                                        .replace('%topLong%', topLong)
                                        .replace('%startDate%', req.params.startDate)
                                        .replace('%endDate%', req.params.endDate);



    request({url: hotelsURL}, function(err, response, body) {
        if(err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(JSON.parse(body));
            res.json(JSON.parse(body));
        }
    });
});