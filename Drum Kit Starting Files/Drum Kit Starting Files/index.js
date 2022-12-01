

var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){

{document.querySelectorAll(".drum")[i].addEventListener( "click",function(){
           var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            ButtonAnimation(buttonInnerHTML)});
    
          document.addEventListener("keypress", function(event){
            makeSound(event.key);
            ButtonAnimation(event.key);

          });

        function makeSound(key){
            switch (key) {
                case "w":
                    var audio1 =new Audio("sounds/tom-1.mp3");
                    audio1.play();
                    break;
              
                    case "a":
                        var audio2 =new Audio("sounds/tom-2.mp3");
                        audio2.play();
                        break;   
            
                default: console.log(buttonInnerHTML);
                    break;
            } }


            function ButtonAnimation(currentKey) {
             var activeButton=document.querySelector("." + currentKey);
             activeButton.classList.add("pressed");

        
            setTimeout(function() {
                activeButton.classList.remove("pressed");
            } , 100);
        }

    }}



 