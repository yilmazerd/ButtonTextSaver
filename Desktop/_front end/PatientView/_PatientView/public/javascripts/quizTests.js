	//var quiz = new QuizObject('This is the qustion for test',['answer-1Test','answer-2','answer3','answer-4'],0,1,4);
  	//quiz._load();

  	//var quiz1 = new QuizObject('This is the qustion for test-1',['answer-1Test','answer-2','answer3','answer-4'],0,1,4);
  	//var quiz2 = new QuizObject('This is the qustion for test-2',['answer-1Test','answer-2','answer3','answer-4'],0,1,4);
  	//var quiz3 = new QuizObject('This is the qustion for test-3',['answer-1Test','answer-2','answer3','answer-4'],0,1,4);
  	//var quiz4 = new QuizObject('This is the qustion for test-4',['answer-1Test','answer-2','answer3','answer-4'],0,1,4);

  	function loadTest() {
		var quiz2 = new QuizObject('This is the qustion for test2, loading example',['answer-1Test','answer-2Test changes falan','answer3','answer-4'],0,2,4);
  		quiz2._load();
  	}

	function test1 () { //test creation of quiz object
	
		q = "this is my q";
		a1 = "this is a1";
		a2 = "this is a2";
		a3 = "this is a3";
		a4 = "this is a4";
		a5 = "this is a5";
		ca =  0;
		ans = [a1,a2,a3,a4,a5]
		daq = quiz.createQuiz(q,ans,ca);
		console.log ('called test1')
		return daq;
	} 

	function test2() { // test loading of quiz
		let a = test1();
		quiz.loadQuiz(a.q,a.ans)
	}

	function test3() { // test hide of quiz
		
		quiz.hideQuiz('quiz_question',['quiz_answer_1','quiz_answer_2','quiz_answer_3','quiz_answer_4','quiz_answer_5']);

	}


	function testloadq1() {
		
		quiz.hideQuiz();
		quiz.loadQuiz('This is question for test1',['Test-1-Answer-1','Test-1-Answer-2','Test-1-Answer-3','Test-1-Answer-4']);
	}

	function testloadq2() {
		
		quiz.hideQuiz();
		quiz.loadQuiz('This is question for test2',['Answer-1','Answer-2']);
	}