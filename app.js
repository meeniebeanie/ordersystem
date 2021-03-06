// requiring express.js and mongoose.js files here.
var express = require('./config/express');
var mongoose = require('./config/mongoose');
mongoose.mPromise = global.promise;

// calling both functions, which comes from the above files.
var app = express();
var db = mongoose();

// set port to 8000.
app.set('port', (process.env.PORT || 8000));

//initialize npm start
app.listen(app.get('port'), function() {
  console.log ('DSR: user-side running on localhost port: ', app.get('port'));
});

//exporting main app.
module.exports = app;
