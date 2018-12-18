
    // set global variables

var totalscore = 0;
var wins = 0;
var losses = 0;
var randomNum
var blue
var green
var purple
var red



$("#wins").text(wins);

$("#totalscore").text(totalscore);   
   
//generate random number for gems

function randomizer () {
var random = Math.floor(Math.random() * 99) + 1;
randomNum = random;
$("#random").html(randomNum);

    
    var bluerandom = Math.floor(Math.random() * 14)  + 1;
    blue = bluerandom;
    var greenrandom = Math.floor(Math.random() * 14)  + 1;
    green = greenrandom;
    var redrandom = Math.floor(Math.random() * 14)  + 1;
    red = redrandom;
    var purplerandom = Math.floor(Math.random() * 14)  + 1;
    purple = purplerandom;


// reset totalscore $("#totalscore").empty();


}  
  randomizer();  

//add user clicks to total
   
      $("#blue").click(function(){        
        totalscore = totalscore + blue;
        $("#totalscore").html(totalscore);
        $("#message").empty();
          
        if (totalscore > randomNum) {
           $("#message").append("Sorry, you went over. &#9785;");
           losses++;
           $("#losses").text(losses);
           reset();          
        }

        else if (totalscore==randomNum){
            $("#message").append("Looks like we have a winner! &#9786;");
            wins++;
            $("#wins").text(wins);
            reset();  
        }
      });

      $("#red").click(function(){        
        totalscore = totalscore + red;
        $("#totalscore").html(totalscore);
        $("#message").empty();

        if (totalscore > randomNum) {
          $("#message").append("Sorry, you went over. &#9785;");
          losses++;
          $("#losses").text(losses);
          reset();          
       }

       else if (totalscore==randomNum){
           $("#message").append("Looks like we have a winner! &#9786;");
           wins++;
           $("#wins").text(wins);
           reset();  
       }
      });

      $("#green").click(function(){        
        totalscore = totalscore + green;
        $("#totalscore").html(totalscore);
        $("#message").empty();

        if (totalscore > randomNum) {
          $("#message").append("Sorry, you went over. &#9785;");
          losses++;
          $("#losses").text(losses);
          reset();          
       }

       else if (totalscore==randomNum){
           $("#message").append("Looks like we have a winner! &#9786;");
           wins++;
           $("#wins").text(wins);
           reset();  
       }
      });

      $("#purple").click(function(){        
        totalscore = totalscore + purple;
        $("#totalscore").html(totalscore);
        $("#message").empty();
        if (totalscore > randomNum) {
          $("#message").append("Sorry, you went over. &#9785;");
          losses++;
          $("#losses").text(losses);
          reset();          
       }

       else if (totalscore==randomNum){
           $("#message").append("Looks like we have a winner! &#9786;");
           wins++;
           $("#wins").text(wins);
           reset();  
       }
      });




 //function to reset game 
 function reset() {
    totalscore = 0;
    randomizer(); 
   
 

    //isOperatorChosen = false;
   

  //  $("#first-number, #second-number, #operator, #result").empty();
  }





