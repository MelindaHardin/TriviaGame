
        var correct = 0;
		var incorrect = 0;
		var unanswered = 0;
        var questionNumber = 0;
        
        var correctAnswers = [
            "Forrest Gump",
            "Jerry Maguire",
            "Alonzo Harris",
            "Smokey",
            "'The Bride'",
            "Doughboy",
            "Gordon Gekko",
            "'Clarence the Barber'"
    ];
		

		
		var questions =[

			question1 = {
			"question": "Life is like a box of chocolates, you never know what you're gonna get.",
			"answers": [
				"Forrest Gump",
				"Sheriff Woody",
				"Chuck Noland",
				"Old Paul Edgecomb"
			]
			},

			question2 = {
			"question": "Show me the money!",
			"answers": [
				"Jerry Maguire", 
				"Ethan Hunt",
				"Joel Goodsen",
				"Lt. Daniel Kaffee"
			]
			},

			question3 = {
			"question": "To protect the sheep, you gotta catch the wolf, and it takes a wolf to catch a wolf.",
			"answers": [ 
				"Alonzo Harris", 
				"Robert McCall",
				"Coach Herman Boone",
				"Frank Lucas"
			]
			},
				
			question4 = {
			"question": "You got knocked the f*** out!",
			"answers": [
				"Smokey",
				"Detective James Carter",
				"Johnny Booze",
				"Ruby Rhod"
			]
			},

			question5 = {
			"question": "Wiggle your big toe.",
			"answers": [
				"Cecile de Volanges",
				"Mia wallace",
				"Ulla",
				"'The Bride'"
			]
			},

			question6 = {
			"question": "Either they don't know, don't show, or don't care about what's goin' on in the hood.",
			"answers": [
				"Craig Jones",
				"Captain Dickson",
				"Darius Stone",
				"Doughboy"
			]
			},

			question7 = {
			"question": 'Greed, for the lack of a better word is, good.',
			"answers": [
				"Jack T. Colton",
				"Detective Nick Curran",
				"Gordon Gekko",
				"Hank Pym"
			]
			},

			question8 = {
			"question": "That's beautiful.  What is that, velvet?",
			"answers": [
				"Buddy Love",
				"'Clarence the Barber'",
				"Rasputia Latimore",
				"Axel Foley"
			]
			},

		];			

	
		

		$(document).ready(function() {

			var i=0;
			number= 15;
			var counter;
			var triviaInterval;


			function secondCounter(){
				counter = setInterval(decrement, 1000);
			}


		    function decrement() {
				number--;
				$("#time").html("<h2>" + number + "</h2>");
				if (number === 0) {
					timeOut()
					number=15;
				}
		    }

			

			function loadTrivia(){

				if (i > (questions.length-1)) {
					clearInterval(counter);
					clearInterval(triviaInterval);
					$("#time").empty();
					$("#answers").empty();
					$("#question").empty();
					$(".answer").empty();
					$("#answers").text("Want to play again?");
					$("#answers").append('<div>' + "Correct Answers: " + correct);
					$("#answers").append('<div>' + "Incorrect Answers: " + incorrect);
					$("#answers").append('<div>' + "Unanswered questions: " + unanswered);
					resetGenerator();

					}else{

						var question = $("<div class= 'question'>");
						var option = $("<div class= 'answer'>");
						var option1 = $("<div class= 'answer'>");
						var option2 = $("<div class= 'answer'>");
						var option3 = $("<div class= 'answer'>");

						$("#answers").empty();

						question.text(questions[i].question);
						option.text(questions[i].answers[0]);
						option1.text(questions[i].answers[1]);
						option2.text(questions[i].answers[2]);
						option3.text(questions[i].answers[3]);


						$("#question").html(question);
						$("#answers").append(option);
						$("#answers").append(option1);
						$("#answers").append(option2);
						$("#answers").append(option3);

						
						$(".answer").on("click", function(){
							clearInterval(counter);
							clearInterval(triviaInterval);
							var userChoice = $(this).text();
							console.log(userChoice);

							if (correctAnswers.indexOf(userChoice) !== -1 ) {
								$("#answers").empty();
								$(".answer").empty();
								correct ++;
								$("#answers").html("You are correct!");
								setTimeout(gameLoad, 3000);
								}else{				
									$("#answers").empty();
									$(".answer").empty();
									incorrect++;
									$("#answers").html("Sorry the correct answer is, " + correctAnswers[i-1]);
									setTimeout(gameLoad, 5000);

								}

						});
						i++;
						console.log(i);
						number=15;
					}

				}


			
			function timeOut(){
				
				clearInterval(counter);
				clearInterval(triviaInterval);
				$("#answers").empty();
				$(".answer").empty();
				unanswered++;
				$("#answers").html("The correct answer is, " + correctAnswers[i-1]);
				setTimeout(gameLoad, 5000);
			}


			function gameLoad(){
				secondCounter();
				loadTrivia();
				triviaInterval = setInterval(loadTrivia, 15000);
			}

		
			function resetGenerator(){
				$("#reset").html("<button class='reset'> Start Over </button>");
			} 

		
			$("#question").html("<button class='startButton'> Start </button>");

			$(".startButton").on("click", gameLoad);


			$("#reset").on("click", function() {
				clearInterval(counter);
				clearInterval(triviaInterval);
				i=0;
				correct = 0;
				incorrect = 0;
				unanswered = 0;
				gameLoad();
				$("#reset").empty();
			})

		});