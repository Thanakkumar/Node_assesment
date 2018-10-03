var fs = require('fs');
var express = require('express');

var app=express();
var data = "File write operation in node js";
app.get('/write',function(req,res){
    fs.writeFile('write1.txt', data, function(err, data){
        if (err) res.send(err);
        res.send("Successfully Written to File.");
    });
}).listen(3001);
