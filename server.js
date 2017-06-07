var express = require('express'),
    bodyParser = require('body-parser'),
    port = 8000;

var app = express();

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
