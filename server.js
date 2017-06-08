var express = require('express'),
    bodyParser = require('body-parser'),
    port = 8000;

var app = express();
var mongodb = require('mongodb');
mongoClient = mongodb.MongoClient,
ObjectID = mongodb.ObjectID, // Used in API endpoints
db; // We'll initialize connection below
var MONGODB_URI = process.env.MONGODB_URI;
mongoClient.connect(MONGODB_URI, function (err, database) {
if (err) {
process.exit(1);
}
db = heroku_3bwcfv72; // Our database object from mLab
console.log("Database connection ready");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

// Just a bit of middleware to print every route request to the console...
app.use( function(req, res, next){
  console.log(req.method, req.url);
  next();
});

// ROUTES //////////////////////
require('./server/config/routes.js')(app);
///////////////////////////////

// MONGODB //////////////////////
require('./server/config/mongoose.js');
///////////////////////////////

app.listen(port, function(){
  console.log(`Listening on ${port}`);
});
