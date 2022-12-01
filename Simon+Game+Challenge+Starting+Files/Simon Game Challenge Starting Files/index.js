
/**************** arxikopoiw metavlites pou tha xrisimopoihsw*****************/ 

var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern = [];
var started = false;
var level = 0;
/*******************************************************************/
// prwti leitourgia tou paixnidiou 
$(document).keypress(function(){ // otan tha patithei opoiodipote gramma sto pliktrologio 
    if (!started) { // an started = 1 tote emfanise to level kai ksekina to paixnidi 
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;
    }
});

// defteri leitourgia
$(".btn").click(function() { 
    var userChosenColor= $(this).attr("id"); // otan ena button patithei pare to id tou me to xrwma
    userClickedPattern.push(userChosenColor); // me to push krataei to teleutaio button pou exeis pathsei  kai epistrefei ton kainourio pinaka ananeomeno 
    playSound(userChosenColor); 
    AnimationPress(userChosenColor);
    checkAnswer(userClickedPattern.length-1); // ki edw elegxei ta prohgoumena button se seira
}); 


/*************************************functions************************************/

function nextSequence(){
    // tuxaia emfanisi button 
    userClickedPattern = []; // mhdenizei gia na parei kathe gurw to teleutaio xrwma pou tha patithei apo ton xristi 
    level ++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour= buttonColors[randomNumber] ;
    gamePattern.push(randomChosenColour);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
}

function playSound(name){
    // gia opoiodhpote button me id = name = color tha akougetai hxos 
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
} 

function AnimationPress(currentColor){
    //function gia efe sta button 
    $("#"+currentColor).addClass("pressed"); // prosthetw class me efe
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");},100); // thetw posi wra tha diarkesi 
    }

    function checkAnswer(currentLevel) { 
        /*elegxei an h seira twn xrwmatwn pou exoun patithei einai idia me afti pou exei o pinakas 
         ta random xrwmata */
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { // edw koitaei ta proigoumena stoixeia tou pinaka px an exoume sunolika pathisei 3 xrwmata koitaei ta dyo prohgoumena
            if (userClickedPattern.length === gamePattern.length) {// edw koitaei sunolika ta stoixeia tou pinaka mazi me to teleutaio , edw koitaei kai to teleutaio xrwma 
              setTimeout(function () {
                nextSequence();
              }, 1000);
            }
          } else {
            playSound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");
      
            setTimeout(function () {
              $("body").removeClass("game-over");
            } , 200);
           //an den isxuei h isothta tote ksekinaei apo thn arxi 
            startOver();
          }
      }

    function startOver() {
        //thetoume apo thn arxi to paixnidi 
        level = 0;
        gamePattern = [];
        started = false;
      }



