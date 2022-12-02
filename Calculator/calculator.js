
const express= require("express");
const bodyParser= require("body-parser");

const app=express();
/*mas deixnei ta form data */
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
   // res.send("<h1>Hello Anastasia!</h1>");
   res.sendFile(__dirname + "/calculator.html");
});
app.post("/", function(req,res){

    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var result= num1+num2 ;

    res.send("Το αποτέλεσμα της πράξης είναι "+ result);
 });
app.listen(3000);
