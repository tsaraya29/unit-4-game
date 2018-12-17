
    // set global variables
var wins = 0;
var losses = 0;
var gempicked = 0;
var totalscore = 0;

$(document).ready(function() { 
  

    var random = Math.floor(Math.random() * 99) + 1;
    $("#random").html(random);
        });
//generate random number for gems
    
    var bluerandom = Math.floor(Math.random() * 14)  + 1;
    var greenrandom = Math.floor(Math.random() * 14)  + 1;
    var redrandom = Math.floor(Math.random() * 14)  + 1;
    var purplerandom = Math.floor(Math.random() * 14)  + 1;
   
    $("#blue").click(function(){
        
       $(totalscore).val(bluerandom);
      });
        
  /*  $(".gem").on("click", function() {

        var gempicked = $(this).val();
        console.log("They picked" + gempicked);
    }); */
    
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#totalscore").html(totalscore); 
 //function to reset game 





