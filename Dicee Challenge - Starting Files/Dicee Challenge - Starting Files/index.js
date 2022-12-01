var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImage1="dice" + randomNumber1 + ".png";
var randomImageSource= "images/" + randomImage1;
var image1= document.querySelector("img.img1");
image1.setAttribute("src", randomImageSource );


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImage2="dice" + randomNumber2+ ".png";
var randomImageSource= "images/" + randomImage2;
var image2= document.querySelector("img.img2");
image2.setAttribute("src", randomImageSource );



if (randomNumber2>randomNumber1) {
    document.querySelector("h1").textContent="Player 2 is the Winner!";
}
else if (randomNumber2<randomNumber1) {
    document.querySelector("h1").textContent="Player 1 is the Winner!";  
}
else {document.querySelector("h1").textContent="No Winner in this game "; }



