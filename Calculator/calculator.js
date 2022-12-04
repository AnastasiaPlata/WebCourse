
const express= require("express");
/*einai to body tou node.js (server) kai 
zhtaei na diaxeiristei to http post request apo 
ta data pou uparxoun sto body toy server ki na ta 
apokodikopoisei */
const bodyParser= require("body-parser");

const app=express();
/*mas deixnei ta form data */
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
   // res.send("<h1>Hello Anastasia!</h1>");
   res.sendFile(__dirname + "/calculator.html");
   //gurnaei to arxeio tou html 
});
app.post("/", function(req,res){
//zhtaei ta sugkekrimena data apo ton server
// to post -> postarei ston browser  
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var result= num1+num2 ;
// emfanizei ston browser 
    res.send("Το αποτέλεσμα της πράξης είναι "+ result);
 });
app.listen(3000); //localhost 
