const express = require('express');
const path = require('path');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Use Routes
app.use('/api/locations', require('./routes/api/locations'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('../frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../frontend', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));