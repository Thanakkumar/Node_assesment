var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.get('/nonRepeating/:value',function(req,res){
    var data = req.params.value;
    var chars = data.split("");
    for(i=0;i<chars.length;i++){
      for(j=i+1;j<chars.length;j++){
          if(chars[i]===chars[j]){
              flag=false;
              break;
              
          }
          else{
              flag=true;
              continue;
          }

      }
      if(flag){
          res.send("first non repeating character is: "+chars[i])
      }
    }
});
app.listen(9000);
