

var NUMBER_OF_QUESTIONS = 14;


// Read the sequence and initiate objects
//var movie = new MovieObject('https://www.larissatech.com/test/sLarissaWarning3.mov');
//PATIENT_OBJECTS.push(movie)
var quiz = new QuizObject('This is the qustion for test',['Correct Answer should alarm','answer-2','answer3','answer-4'],4,QUESTION_ID++,NUMBER_OF_QUESTIONS,'This is the first explanation');
PATIENT_OBJECTS.push(quiz)
//var movie = new MovieObject('https://www.larissatech.com/test/sLarissaWarning1.mov');
//PATIENT_OBJECTS.push(movie)
var quiz = new QuizObject('This is the qustion for test',['Correct Answer should alarm','answer-2','answer3','answer-4'],4,QUESTION_ID++,NUMBER_OF_QUESTIONS,'This is the second explanation');
PATIENT_OBJECTS.push(quiz)
var quiz = new QuizObject('This is the qustion for test',['Incorrect Answer should not alarm','answer3','answer-4'],4,QUESTION_ID++,NUMBER_OF_QUESTIONS,false);
PATIENT_OBJECTS.push(quiz)
var movie = new MovieObject('https://www.larissatech.com/test/sLarissaWarning3.mov');
PATIENT_OBJECTS.push(movie)
var closes = new CloseScreen();
PATIENT_OBJECTS.push(closes)


INDEX_LENGTH = PATIENT_OBJECTS.length;
