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
            setInterval(nextQuestion2, 1000*10);

        }
  
            function nextQuestion2 (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q2").show();
                setInterval(nextQuestion3, 1000*10);

            }

            function nextQuestion3(){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q3").show();
                setInterval(nextQuestion4, 1000*10);

            }

            function nextQuestion4 (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q4").show();
                setInterval(nextQuestion5, 1000*10);

            }

            function nextQuestion5 (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q5").show();
                setInterval(nextQuestion6, 1000*10);

            }

            function nextQuestion6 (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q6").show();
                setInterval(nextQuestion7, 1000*10);

            }

            function nextQuestion7 (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q7").show();
                setInterval(nextQuestion8, 1000*10);

            }

            function nextQuestion8 (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q8").show();
                setInterval(nextQuestion9, 1000*10);

            }

            function nextQuestion9 (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q9").show();
                setInterval(nextQuestion10, 1000*10);

            }

            function nextQuestion10 (){
                $("#start-button").hide();
                $(".questions").hide();
                $("#q10").show();
                setInterval(results, 1000*10);

            }





    
});