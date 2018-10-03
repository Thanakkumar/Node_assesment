var fs=require("fs");
var express=require("express");
var app=express();

app.get('/',function(req,res){
    fs.readFile("./input.txt",function(err,data){
    if(err){
        console.log(err);
    }
    else{
        res.send(data.toString());
    }
    });
});
app.listen(3001);


