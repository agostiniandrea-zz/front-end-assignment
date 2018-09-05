const express = require('express');
const app = express();

const fs = require('fs');

function callLog(url) {
    return console.log('API call done: ', url);
}

app.get('/registry/*', function (req, res) {
    callLog(req.url);
    let data = fs.readFileSync('./server/' + req.url, { encoding: 'utf8' });
    setTimeout(() => {
        res.json(JSON.parse(data));
    }, 500);
});


app.post('/*', function (req/* , res */) {
    callLog(req.url);
    setTimeout(() => {
        /* res. */
    }, 500);
});

app.listen(4000, () => {
    console.log('App listening on port 4000');
});