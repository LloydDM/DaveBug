const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "./")));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile('mockup.html', { root: path.join(__dirname, './') });
});

app.listen(6462, function() {
  console.log('Listening on port 6462');
});