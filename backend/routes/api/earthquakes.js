const express = require('express');
const router = express.Router();
const axios = require('axios');

// @route   GET api/earthquakes
// @desc    Get All earthquakes
// @access  Public
router.get('/', (req, res) => {
    // Bounding box for the whole world
    const north = 90;
    const south = -90;
    const east = 180;
    const west = -180;

    let count = 0;

    // Get the earthquakes from the location's bounding box
    axios.get(`http://api.geonames.org/earthquakesJSON?north=${north}&south=${south}&east=${east}&west=${west}&maxRows=500&username=danx`)
    .then(earthquakeRes => {
        // Set the date to a year from now
        d = new Date();
        d.setFullYear(d.getFullYear() - 1);

        // Filter only earthquakes that happened since last year
        let earthquakes = earthquakeRes.data.earthquakes.filter(earthquake => {
            const earthquakeDate = new Date(earthquake.datetime);
            if (earthquakeDate >= d && count < 10) {
                count++;
                return earthquake;
            }
        });

        res.json({ earthquakes });
    })
    .catch(err => {
        console.error(err);
    });

    //res.send("Hello");
});

module.exports = router;