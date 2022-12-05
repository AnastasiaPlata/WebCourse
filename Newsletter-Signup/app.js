const express = require("express");
const bodyparser= require ("body-parser");
const request = ("request");

// ///////////////////////////////////////////////////

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

///////////////////////////////////////////////////// 
// μεταφέρω την ιστοσελίδα σε εναν server και εμφανίζω το html μέσω αυτού 
app.get("/",function(req,res){
 
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    // τα δεδομένα που έχω στην ιστοσελίδα αποθηκεύονται στον server μου 
 var firstName = req.body.fname;
 var secondName = req.body.sname;
 var email = req.body.mail;
 var password = req.body.password;
//console.log(firstName,secondName,email,password);
});

///////////////////////////////////////////////////

app.listen(3000);
//api-key :2ce11cc2cfb54dcebea137682f7d7894-us21
~