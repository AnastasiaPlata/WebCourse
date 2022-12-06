const express = require("express");
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

});
app.listen(3000); 