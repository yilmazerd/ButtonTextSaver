function QuizObject(question,answers,ca,id=0,length=0,expla=false,motiva=false,leav={},type="mc")  
{
	// question string input that is question
	// answers: string array input that lists answers
	// ca: integer, index of correct answer
	// type: string that shows the type of the quiz, ma indicates multiple choice
	// expla, explanation in case the user gets the question wrong and we show an explanation
	// motiva, string address to the sound file we play for motivation when the user knows the question
	// leav, object for future features
	this.pvclass = 'quiz';
	this.question  = question;
	this.answers = answers;
	this.answerl = answers.length;
	this.ca = ca; //correct_answer
	this.expla = expla;
	this.motiva = motiva;
	this.leav = leav;
	this.type = type;

	this.givenanswer = 0;

	this.answerHTMLS = ['quiz_answer_1','quiz_answer_2','quiz_answer_3','quiz_answer_4','quiz_answer_5']
	this.id = 'Question ' + id + '/' + length;
};


QuizObject.prototype.showQuestion = function(question=this.question,questionhtml="quiz_question") {
	document.getElementById(questionhtml).innerHTML = question;
	this.showObject(questionhtml)
}

QuizObject.prototype.showID = function(id=this.id) {
	document.getElementById('question_id').innerHTML = this.id;
	this.showObject('question_id')
}

QuizObject.prototype.showAnswers = function(answers=this.answers,answerHTMLS = ['quiz_answer_1','quiz_answer_2','quiz_answer_3','quiz_answer_4','quiz_answer_5']) {
		for (let i = 0; i <= answers.length-1; i++) {
			document.getElementById(answerHTMLS[i]).innerHTML = answers[i];
			this.showObject(answerHTMLS[i])
		}
	}

QuizObject.prototype.showExplanation = function(explanation=this.expla,explanationHTML = "quiz_explanation") {
		document.getElementById(explanationHTML).innerHTML = explanation;
		this.showObject(explanationHTML)
	}

QuizObject.prototype.showObject = function(_domObject) {
		//document.getElementById(_domObject).style.display = "inline";
		let ss = "#" + _domObject;
		$(ss).fadeIn(500);
	}



QuizObject.prototype.hideObject = function(_domObject) {
		document.getElementById(_domObject).style.display = "none";
	}

QuizObject.prototype.hideAnswers = function(answerHTMLS = ['quiz_answer_1','quiz_answer_2','quiz_answer_3','quiz_answer_4','quiz_answer_5']) 
	{
		for (var i = 0; i < answerHTMLS.length; i++){	
			this.hideObject(answerHTMLS[i]);
		}
	}

QuizObject.prototype.hideQuestion = function(questionhtml = "quiz_question") {
		this.hideObject(questionhtml);
	}

QuizObject.prototype.hideExplanation = function(explanationHTML = "quiz_explanation") { 
		this.hideObject(explanationHTML);
	}

QuizObject.prototype.hideId = function (idHTML = "question_id") {
	this.hideObject(idHTML);
}


QuizObject.prototype.answerGiven = function(_answer) {
		// make previos visible under condition - 1
		// make next visible under codition - 2		
		//document.getElementById('quiz_next').style.display = "inline";
		//document.getElementById('quiz_previous').style.display = "inline";
		//PV_SHOW_TOP_MENU()
		document.getElementById('top_buttons_ms').style.display = 'block';
		console.log('answer is given')
	}

QuizObject.prototype.nextPressed = function() {
		console.log ('next button is pressed');
	}

QuizObject.prototype.previousPressed = function() {
		console.log ('previous button is pressed');
	}


QuizObject.prototype.showRightAnswer = function(_id) {
	     $(".quiz-answer-option").css("background",QUIZ_BUTTON_CLEAR_COLOR_INSIDE);
     	 $(".quiz-answer-option").css("border",QUIZ_BUTTON_CLEAR_COLOR_BORDER);
     	 _docId = '#quiz_answer_' + _id;
     	 $(_docId).css("background-color","#ea1e36");
     	 $(_docId).css("border","solid 2px #230105");
     	 document.getElementById('audioForWrongAnswer').play();
		}

QuizObject.prototype._load = function(QuizObjectHTML='quiz_main') {
	this.showQuestion();
	this.hideAnswers()
	this.showAnswers();
	this.showID();
	//deselect all options
	$(".quiz-answer-option").css("background",QUIZ_BUTTON_CLEAR_COLOR_INSIDE );
    $(".quiz-answer-option").css("border",QUIZ_BUTTON_CLEAR_COLOR_BORDER);
	document.getElementById(QuizObjectHTML).style.display = 'inline'
}


QuizObject.prototype._hide = function(QuizObjectHTML='quiz_main') {
		this.hideQuestion();
		this.hideAnswers();
		this.hideExplanation();
		this.hideId();
		document.getElementById(QuizObjectHTML).style.display = 'none'
}