const angular = require('@bower_components/angular'),
      angular_moment = require("@bower_components/angular-moment"),
      angular_route = require("@bower_components/angular-route"),
      boostrap = require("@bower_components/bootstrap"),
      jquery = require("@bower_components/jquery"),
      moment = require("@bower_components/moment");
// added above when switch from bower to yarns bower-away, deleted bower_components, bower.json, bowerrc and bower files, moved @bower_components from node_modules to git folder. Moved all the @bower_components dependencies to the comments section in package.json
const express = require('express'),
    bodyParser = require('body-parser'),
    port = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
// BELOW switched from bower to yarn/ have to add the
// const angular = require('@bower_components/angular') here
// app.use(express.static(__dirname + '/bower_components'));

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
