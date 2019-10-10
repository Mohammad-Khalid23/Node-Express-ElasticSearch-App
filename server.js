// var express = require('express');
// var path = require('path');
// var logger = require('morgan');
// var bodyParser = require('body-parser');

// var index = require('./src/routes/index');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', index);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
'user-strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('./src/config/client');
const port = 8000;
//routes
const index = require('./src/routes/index');
const user = require('./src/routes/user');

app.use(cors());
app.use(logger('dev'));
app.use(express.static(__dirname + '/uploads'));
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/', index);
app.use('/user',user);


app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    console.log('error')
    res.end('\n');
});

app.get('/', (req, res) => {
    res.send('Hey Your server is running on port ' + port);
})

app.listen(port, function () {
    console.log('Yo!!! server is running on ', port);
});