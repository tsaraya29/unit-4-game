
    // set global variables

var totalscore = 0;
var wins = 0;
var losses = 0;

$("#wins").text(wins);

$("#totalscore").text(totalscore); 
 
  
   
//generate random number for gems

var random = Math.floor(Math.random() * 99) + 1;
$("#random").html(random);
    
    var bluerandom = Math.floor(Math.random() * 14)  + 1;
    var greenrandom = Math.floor(Math.random() * 14)  + 1;
    var redrandom = Math.floor(Math.random() * 14)  + 1;
    var purplerandom = Math.floor(Math.random() * 14)  + 1;
    
    
//add user clicks to total
   
      $("#blue").click(function(){        
        totalscore = totalscore + bluerandom;
        $("#totalscore").html(totalscore);      
        if (totalscore > random) {
           $("#message").append("Sorry, you went over. &#9785;");
           losses++;
           $("#losses").text(losses);
           reset();          
        }

        else if (totalscore==random){
            $("#message").append("Looks like we have a winner! &#9786;");
            $("#wins").text(wins);
        }
      });

      $("#red").click(function(){        
        totalscore = totalscore + redrandom;
        $("#totalscore").html(totalscore);
      
      });

      $("#green").click(function(){        
        totalscore = totalscore + greenrandom;
        $("#totalscore").html(totalscore);
      
      });

      $("#purple").click(function(){        
        totalscore = totalscore + purplerandom;
        $("#totalscore").html(totalscore);
      
      });




 //function to reset game 
 function reset() {
   
    totalscore = 0;
    $("#totalscore").empty();

    //isOperatorChosen = false;
   

  //  $("#first-number, #second-number, #operator, #result").empty();
  }





