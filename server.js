'use strict';

var express = require('express');
var cors = require('cors');
var multer = require("multer");
var upload = multer({dest:'uploads/'});
var fs = require("fs");

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse',upload.single('upfile'),function(req,res){
    //Delete the file right away
    fs.unlink(req.file.path,function(err){        
    });
    res.json({fileSize: req.file.size})
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

//https://alive-scribe.glitch.me/