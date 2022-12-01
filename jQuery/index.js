//$(document).ready(function(){
//});

/*$("button").click(function() {
    $("h1").css("color","purple");
});*/

/*$(document).keypress(function(event) {
    $("h1").text(event.key);

}); */
$("h1").on("mouseover",function(){
    $("h1").css("color","red");
});
$("h1").before("<button>new</button>");
$("h1").prepend("<button>new</button>");