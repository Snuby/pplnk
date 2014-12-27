/**
 * Created with IntelliJ IDEA.
 * User: suweijie
 * Date: 14-12-27
 * Time: 10:55
 * To change this template use File | Settings | File Templates.
 */

var express = require("express");
var logger = require('morgan');
var app = express();

app.use(logger());
app.use('/static', express.static(__dirname + '/public'));


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
