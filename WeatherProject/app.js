
const express = require("express");
const https= require("https");
const BodyParser =require("body-parser");

const app = express();
app.use(BodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")});
    app.post("/",function(req,res){
 

/* ζητώ να γίνει η διαδικασία request και response από τον δικό μου σερβερ 
στο browser και από τον δικό μου μεσω API σε άλλον σερβερ*/
const query= req.body.cityName;
const appKey="2b09402f4a28c9a0860d823f88979db7"
const unit="metric"

const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ appKey +"&units="+ unit +"";
/* και ζητώ response (DATA) από την ιστοδελίδα με συγκεκριμένο url 
στον δικό μου σερβερ  */
    https.get(url, function(response) {
/*οn-> addlistener function στην express όπου θέλουμε τα data που θα γυρίσει 
 να είναι αποκωδικοποιημένο μήνυμα από text  σε java script object  */
 response.on("data", function(data){
    const weatherData= JSON.parse(data)
     const temp =weatherData.main.temp
     const weatherDescription = weatherData.weather[0].description 
    const icon = weatherData.weather[0].icon
    const imageUrl= "https://openweathermap.org/img/wn/" + icon + "@2x.png"
     res.write("<h1> the temperature is " + temp + " degrees Celcius</h1>");
    res.write("<img src=" + imageUrl + ">")
     res.write("<p> the weather is " + weatherDescription + " today</p>" );
    res.send()
    })
})
})
   
//     /*const object= {
//         name : "anastasia",
//         favouriteFood: "ramen"}
// console.log(JSON.stringify(object));*/

// //console.log(temp);
// /* στο terminal θα δω τι επιστρέφεται από data στον δικό μου σερβερ */
// });
// });


//app.listen(3000);
   /* μήνυμα που εμφανίζεται στο localhost της ιστοσελίδας μου
   για να εμφανιστεί κάποιο data στην ιστοσελίδα χρειάζομαι html αρχείο που 
   διαβάζει τον κώδικα με το τι θέλω να εμφανίσω και τι λειτουργικότητα θέλω να 
   έχει  */ 


