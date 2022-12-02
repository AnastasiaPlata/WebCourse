const express =require ("express" );
const app= express();
app.get("/", function(request, response) {
    //console.log(request);
     /* localhost:3000/ -> an patisw afto tha mou vgalei 
    to hello (powershell-> node server.js) */ 
    response.send("<h1>hello</h1>"); //root 
});
app.get("/contact", function(req, res) {
    /* localhost:3000/contact -> an patisw afto tha mou vgalei 
    to email */ 
    res.send("anastasia@gmail.com"); //root 
});
app.get("/hobbies", function(req, res) {
    /* localhost:3000/contact -> an patisw afto tha mou vgalei 
    to email */ 
    res.send("anastasia"); //root 
});


 app.listen(3000); 
