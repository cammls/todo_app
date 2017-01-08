var express  = require('express');
var app      = express();
// var router = express.Router();

app.use(express.static('./public')); //bug sans ca! tres important
//start server
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
// app.listen(8088, function () {
//   console.log('Server listening on port 8088')
// })

app.get('/', function(req, res) {
       res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
   });
