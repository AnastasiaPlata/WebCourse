///////// EXPRESS MODULES /////////////////
const express = require("express");
const bodyparser= require ("body-parser");
const request = require("request");
const https = require("https");
const { response } = require("express");

// ///////////////////////////////////////////////////

const app = express();

//Create a new middleware function 
//to serve files from within a given root directory
// The file to serve will be determined by combining req.url 
//with the provided root directory. When a file is not found, instead of sending a 
//404 response, this module will instead call next() to move on to the next middleware, 
//allowing for stacking and fall-backs.

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

//////////////////////REQUESTS/////////////////////////////// 

// The app.get() function routes the HTTP GET Requests to the path which is being 
//specified with the specified callback functions. Basically it 
//is intended for binding the middleware to your application. 
//This is telling express to listen for requests to / and run the function when it sees one.

app.get("/",function(req,res){
 
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    // the users post(send data to our server)
    //To get the posted JSON data, use the bodyParser middleware
 var firstName = req.body.fname;
 var secondName = req.body.sname;
 var email = req.body.mail;
 
//console.log(firstName,secondName,email,password);

//////////////////// JSON ///////////////////

//It is primarily used to transmit data between a server and web applications.
//Web services and APIs use JSON format to provide public data.
var data = {
    members: [
        {
            email_address: email,
            status: "subscribed" ,
            merge_fields:{
                FNAME :firstName,
                LNAME :secondName
            }

      
    }]};
////////////////////////// RESPONSES///////////////////////

    // A common use of JSON is to exchange data to/from a web server.
    // When sending data to a web server, the data has to be a string.
    // Convert a JavaScript object into a string with JSON.stringify()

var jsonData = JSON.stringify(data);
const url ="https://us21.api.mailchimp.com/3.0/lists/c2f56cbf2d"
const options ={
    method:"POST",
    auth:"anastasia:2ce11cc2cfb54dcebea137682f7d7894-us21"
}
// The HTTPS module provides a way of making Node. js 
//transfer data over HTTP TLS/SSL protocol, which is the secure HTTP protocol.
//Create a https server that listens on port 3000 of your browser.
    const request = https.request(url,options ,function(response){
      
          if (response.statusCode === 200) {
            res.sendFile(__dirname+ "/success.html");
          } else {
            res.sendFile(__dirname+ "/failure.html");
          };
        
//When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
            response.on("data", function(data){
            console.log(JSON.parse(data));
        });

});

request.write(jsonData);
request.end();
});

 app.post("/failure", function(req,res){
    res.redirect("/");
 });

///////////////////////////////////////////////////

app.listen(process.env.PORT || 3000);


//api-key :2ce11cc2cfb54dcebea137682f7d7894-us21
// id audience : c2f56cbf2d.