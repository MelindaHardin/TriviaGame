$(document).ready(function(){


    var timer = 10;
    var totalQuestions= 10;
    var totalCorrect= "";

    $(".questions").hide();
    $("#start-button").show();

    $("#start-button").click(gameStart);

        function gameStart(){
            $(".questions").hide();
            $("#start-button").hide();
            
            $("#q1").show();
            setInterval(nextQuestion, 1000*10);

        }
  
            function nextQuestion (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q2").show();
                
                
                
            }





    
});