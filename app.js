const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

const hostname = '0.0.0.0';
const port = process.env.DAVEBUG_PORT || 6462;

app.use(express.static(path.join(__dirname, "./")));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile('mockup.html', { root: path.join(__dirname, './') });
});

app.listen(port, hostname, function() {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});