const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
let textMessages=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){

    let today =new Date();
    // var currentDay=today.getDay();
    // var day="";
    //  if (currentDay === 6 ||currentDay === 0) {
    //     day="Weekend";
    // } else {
    //     day="Weekday";

    // switch(currentDay) {
    //         case 0:
    //         day="Sunday";
    //         break;
    //         case 1:
    //         day="Monday";
    //         break;
    //         case 2:
    //         day="Tuesday";
    //         break;
    //         case 3:
    //         day="Wednesday";
    //         break;
    //         case 4:
    //         day="Thursday";
    //         break;
    //         case 5:
    //         day="Friday";
    //         break;
    //         case 6:
    //         day="Saturday";
    //         break;
    //         default:
    //             console.log("error : the current day is " + currentDay);
    // }
    let options ={
   weekday:"long",
    day:"numeric",
    month:"long"
};
let day = today.toLocaleDateString("el-GR",options);
    res.render("list",{kindOfDay:day,newListItem:textMessages});
    });
    app.post("/",function(req,res){

         textMessage= req.body.text ;
         textMessages.push(textMessage)

        console.log(textMessage);
        res.redirect("/");
       
    
  
    })

    

app.listen(3000); 