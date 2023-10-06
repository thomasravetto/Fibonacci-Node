const express = require('express');

const{ fibonacci } = require('./fibonacci')

const PORT = 3500;

const app = express();

app.get('/', (req, res) => {
    res.send("Hi")
})

// Return fibonacci sequence from 0 to index, if no query is passed index defaults to 10
app.get('/fibonacci', (req, res) => {
    let index = 10;
    if (req.query && req.query.index) {
        index = req.query.index;
    }
    const fibonacci_array = fibonacci(index);
    res.json(fibonacci_array);
})

app.listen(PORT, () => {
    console.log("Server working on port: ", PORT);
})