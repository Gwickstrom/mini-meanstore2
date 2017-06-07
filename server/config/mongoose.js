var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    reg = new RegExp( ".js$", "i" ),
    models_path = path.join( __dirname, "../models");

// Deal w/ DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

// connect
mongoose.connect( 'mongodb://admin:admin@ds145148.mlab.com:45148/heroku_3bwcfv72' );
// load any models

fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});
