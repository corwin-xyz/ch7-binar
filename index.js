if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const createError = require("http-errors");
const express = require('express');
const routes = require('./routes');

const port = 3001;
const flash = require('express-flash');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
const passport = require('./lib/passport');
app.use(passport.initialize());

app.set('view engine', 'ejs');

app.use(routes);

app.listen(port, () => {
  console.log('SERVER ON');
});

// 404 Handler
app.get("*", (req, res) => {
  res.render("error",{title:"404 "} )
})

// Internal Server Error Handler
app.use(function(err, req, res, next) {
  console.error(err)
  res.status(500).json({
    status: 'fail',
    errors: err.message
  })
})

module.exports = app;