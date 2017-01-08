var express  = require('express');
var app      = express();
// var router = express.Router();

app.use(express.static('./')); //bug sans ca! tres important
//start server
app.listen(process.env.PORT || 8088)
// app.listen(8088, function () {
//   console.log('Server listening on port 8088')
// })

app.get('/', function(req, res) {
       res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
   });
