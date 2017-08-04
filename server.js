var express = require('express');
var multer = require('multer');


var storage = multer.memoryStorage();
var upload  = multer({storage: storage});
var app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/upload", upload.single('data'), function (req, res) {
  res.status(200).send(req.file.size+' '+req.file.originalName);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
