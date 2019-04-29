const express = require('express');
const router = express.Router();
const axios = require('axios');

// @route   POST api/locations
// @desc    Search the location
// @access  Public
router.post('/', (req, res) => {
    const degKm = 111.12;
    const x = 500 / 2;

    let location = encodeURI(req.body.location);
    let lat, long;
    let north, south, east, west;

    let count = 0;

    // Get the latitud and longitud of the location
    axios.get(`http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=danx`)
    .then(coordRes => {
        //console.log(coordRes.data.geonames[0]);

        lat = coordRes.data.geonames[0].lat;
        long = coordRes.data.geonames[0].lng;

        // Create bounding box for the location
        // 1 degree in latitude == 111.12 km
        // Add an 'x' km sample from center to north & center to south
        north = parseFloat(lat) + (x / degKm);
        south = lat - (x / degKm);

        // 1 degree in longitude == 111.12 km / cos(lat)
        // Add an 'x' km sample from center to east & center to west
        east = parseFloat(long) + ((x / degKm) / Math.cos(lat));
        west = long - ((x / degKm) / Math.cos(lat));

        //console.log(`bbox(${west}, ${south}, ${east}, ${north})`);
        //console.log(north + " " + south + ", " + east + " " + west);

        // Get the earthquakes from the location's bounding box
        axios.get(`http://api.geonames.org/earthquakesJSON?north=${north}&south=${south}&east=${east}&west=${west}&maxRows=500&username=danx`)
        .then(earthquakeRes => {
            // Check earthquake's lat & lng is whithin bounding box coordinates. Error with GeoNames API
            // Check http://api.geonames.org/earthquakesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&username=demo
            // http://api.geonames.org/earthquakesJSON?north=1&south=-1&east=-1&west=1&username=abhijeetmitra

            let earthquakes = earthquakeRes.data.earthquakes.filter(earthquake => {
                if (earthquake.lat <= north + 15 && earthquake.lat >= south - 15 && earthquake.lng <= east + 15 && earthquake.lng >= west - 15 && count < 10) {
                    count++;
                    return earthquake;
                }
            });

            res.json({
                location: {
                    lat,
                    long
                },
                earthquakes,
                //earthquakes: earthquakeRes.data.earthquakes
            });
        })
        .catch(err => {
            console.error(err);
        });
    })
    .catch(err => {
        // Location not found
        console.error(err);
    });
});

module.exports = router;