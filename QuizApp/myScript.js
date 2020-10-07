var questions=[
	{
		question:" What is the National Bird of Nepal",
		choices:['Peacock','Parrot','Lophophorus','Eagle'],
		correctAnswer:2
	},
	{
		question:"What is the National Animal of Nepal",
		choices:['Deer','Lion','Cow','Tiger'],
		correctAnswer:2
	},
	{
		question:" What is the National Color of Nepal",
		choices:['red','pink','Crimson','Blue'],
		correctAnswer:2
	},
	{
		question:" What is the National Game of Nepal",
		choices:['Hockey','Cricket','Footbal','Volleyball'],
		correctAnswer:3
	},
	{
		question:" What is the National Tree of Nepal",
		choices:['Tamarind','Neem','Peepal','Banana'],
		correctAnswer:2
	},
	{
		question:" What is the National Flower of Nepal",
		choices:['Lotus','Rose','jasmine','Rhododendron'],
 		correctAnswer:3
	},

];

//Declare some of the variable
var currentQuestion=0;
var correctAnswers=0;
var quizOver= false;

//Check whether the page is fully loaded
$(document).ready(function(){
	displayCurrentQuestion();
	//to find next message and hide
	$(this).find(".quizMessage").hide();
	//run the function when nextButton is click
	$(this).find(".nextButton").on("click",function(){
		//check whether the quiz is over or not
		if(!quizOver){
			value=$("input[type='checkbox']:checked").val();
			if(value== undefined){
				$(document).find(".quizMessage").text("Please select an answer")
				$(document).find(".quizMessage").show();
			}
			else{
				$(document).find(".quizMessage").hide();
				//check whether the ans is correct and increase the value
				if(value== questions[currentQuestion].correctAnswer){
					correctAnswers++;
				}
				//when the ans is wrg increase the question
				currentQuestion++;
				//check whether the question legth is small or not 
				if(currentQuestion< questions.length){
					displayCurrentQuestion();
				}
				else{
					displayScore();
					//ask to play again from beginning
					$(document).find(".nextButton").text("Play Again");
					quizOver = true;
				}

			}


		}
		else{
			quizOver= false;
			$(document).find(".nextButton").text("Next Question");
			resetQuiz();
			displayCurrentQuestion();
			hideScore(); 
		}
	});
});
function displayCurrentQuestion(){
	console.log("In display current Question");
	var question= questions[currentQuestion].question;
	var questionClass= $(document).find(".quizContainer > .question");
	var choiceList= $(document).find(".quizContainer > .choiceList");
	var numChoices = questions[currentQuestion].choices.length;

	//set the que class text to current que
	$(questionClass).text(question);

	//Remove all the current <li> elements if any
	$(choiceList).find("li").remove();

	var choice;
	for(i=0; i< numChoices;i++){
		choice= questions[currentQuestion].choices[i];
		$('<li><input type="checkbox" value='+ i +' name="dynradio"/>' + choice +'</li>').appendTo(choiceList);

	}
 //console.log(question);

}
function resetQuiz(){
	currentQuestion =0;
	correctAnswers= 0;
	hideScore();
}
function displayScore(){
	$(document).find(".quizContainer > .result").text("You scored: " +correctAnswers +" out of " +questions.length);
	$(document).find(".quizContainer > .result").show();

}

function hideScore(){
	$(document).find(".result").hide();


}


























