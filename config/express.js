//1. Require neccessary NPMs

var express = require('express'),
    morgan = require ('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressLayouts = require('express-ejs-layouts'),
    cookieParser = require('cookie-parser');

//2. Create module.exports function that specifies the ap structure and module usage across production/ development

module.exports = function() {
  var app = express();

  if (process.env.NODE_ENV === 'development')
  {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());
  app.use(methodOverride());
  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.use(expressLayouts);

// need to require routes
  require('../app/routes/order.server.routes')(app);


  app.use(express.static('./public'));
  return app;
};
