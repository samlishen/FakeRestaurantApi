// NPM dependency
const express = require('express');
const bodyParser = require('body-parser');
const yargs = require('yargs');

// Local variables
var app = express();
var args = yargs.argv;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toString()}: ${req.method} ${req.url}`)
    next();
});

// Routing
app.get('/', (req, res) => {
    res.status(200).send('Version 1')
});

if (args.port) {
    app.listen(args.port);
    console.log(`Start listening on ${args.port}`);
} else {
    app.listen(3000);
    console.log(`Start listening on 3000`);
}