const express = require("express");

const app = express();

const https= require("https");

app.get("/", function(req,res){
/* ζητώ να γίνει η διαδικασία request και response από τον δικό μου σερβερ 
στο browser και από τον δικό μου μεσω API σε άλλον σερβερ*/
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=2b09402f4a28c9a0860d823f88979db7&units=metric";
/* και ζητώ response (DATA) από την ιστοδελίδα με συγκεκριμένο url 
στον δικό μου σερβερ  */
    https.get(url, function(res) {
/*οn-> addlistener function στην express όπου θέλουμε τα data που θα γυρίσει 
 να είναι αποκωδικοποιημένο μήνυμα από text  σε java script object  */
res.on("data", function(data){
    const weatherData=JSON.parse(data);
    console.log(weatherData); 
/* στο terminal θα δω τι επιστρέφεται από data στον δικό μου σερβερ */
});
});
   res.send("ok");
   /* μήνυμα που εμφανίζεται στο localhost της ιστοσελίδας μου
   για να εμφανιστεί κάποιο data στην ιστοσελίδα χρειάζομαι html αρχείο που 
   διαβάζει τον κώδικα με το τι θέλω να εμφανίσω και τι λειτουργικότητα θέλω να 
   έχει  */ 
});

app.listen(3000);