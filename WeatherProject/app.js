const express = require("express");

const app = express();

const https= require("https");

app.get("/", function(req,res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=2b09402f4a28c9a0860d823f88979db7&units=metric ";

    https.get(url, function(res) {

res.on("data", function(data){
    console.log(data);

})
})
    res.send();
})

app.listen(3000);