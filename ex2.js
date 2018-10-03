var fs=require("fs");
var express=require("express");
var app=express();

app.get('/',function(req,res,err){
  console.log(req.query.input1+" "+req.query.input2)
  console.log(typeof Number(req.query.input1)+" "+typeof Number(req.query.input2))
    if(isNaN(req.query.input1)||isNaN(req.query.input2)){
      
      res.send("use http://localhost:3001/?input1=give1stnumber&input2=give2ndnumber")
    }
   res.send("product of two numbers : "+req.query.input1*req.query.input2);
});
app.listen(3001);


