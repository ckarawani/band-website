var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/public/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.use(express.static('public'))

app.listen(3000,function(){
  console.log("Live at Port 3000");
});