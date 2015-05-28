/**
 * Created by Glenn on 28-5-2015.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000, function() {
  console.log('%s listening at %s', app.name, app.url);
});
