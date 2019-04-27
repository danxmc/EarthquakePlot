const express = require('express');
const router = express.Router();
const axios = require('axios');

// City Model
//const Action = require('../../models/City');

// @route   GET api/locations
// @desc    Get All locations
// @access  Public
router.get('/', (req, res) => {
    res.send("Hello");
});

// @route   POST api/locations
// @desc    Search the location
// @access  Public
router.post('/', (req, res) => {
    const degKm = 111.12;
    const x = 25 / 2;

    let location = req.body.location;
    let lat, long;
    let north, south, east, west;

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

        console.log(north + " " + south + ", " + east + " " + west);

        // Get the earthquakes from the location's bounding box
        axios.get(`http://api.geonames.org/earthquakesJSON?north=${north}&south=${south}&east=${east}&west=${west}&username=danx`)
        .then(earthquakeRes => {
            console.log(earthquakeRes.data.earthquakes);
            res.json({ earthquakes: earthquakeRes.data.earthquakes });
        })
        .catch(err => {
            console.error(err);
        });
    })
    .catch(err => {
        // Location not found
        console.error(err);
    });
    
    //res.status(500).send('Not found');
    /*newAction.save((err, action) => {
        action
        .populate('User', 'name email role')
        .execPopulate()
        .then(action => res.json(action))
        .catch(err => res.status(500).json({
            success: false
        }));
    });*/
});

// @route   DELETE api/actions/:id
// @desc    Delete An Action
// @access  Private
/*router.delete('/:id', auth, (req, res) => {
    Action.findById(req.params.id)
    .then(action => action.remove()
    .then(() => res.json({
        success: true
    })))
    .catch(err => res.status(404).json({
        success: false
    }));
});*/

module.exports = router;