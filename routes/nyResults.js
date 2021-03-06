require("dotenv").config();
const express = require('express');
const router = express.Router();
const request = require('request');

const api_key = process.env.NY_API_KEY;

router.get('/', (req, res, body) => {
    request('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.query.q + '&api-key=' + api_key, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const json = JSON.parse(body);
            res.send(json);
        } else {
            console.log("There was an error: ") + response.statusCode;
            res.send(body);
        }
    });
});

module.exports = router;