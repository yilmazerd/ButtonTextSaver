

var NUMBER_OF_QUESTIONS = 9;


function T() {}; 
PATIENT_OBJECTS = [];

var movie = new MovieObject('https://www.larissatech.com/test/broctonopening062018v1.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/lucyintrov2.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/videobeforequestions.mp4');
PATIENT_OBJECTS.push(movie)

TO = new T();
TO.question = "When is it OK to soak your wound?";
TO.answerA = "Anytime";
TO.answerB = "12 Hours after discharge";
TO.answerC = "24 Hours after discharge";
TO.answerD = "Never";
TO.rightAnswer =4;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)


TO = new T();
TO.question = "What should you do if your wound dressing becomes soiled?";
TO.answerA = "Clean the dressing and put it back on";
TO.answerB = "Wash the area and leave the dressing off";
TO.answerC = "Clean the area and put on a new dry sterile dressing";
TO.answerD = "Nothing";
TO.rightAnswer =3;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)


TO = new T();
TO.nextType="QUIZ";
TO.question = "How long after your surgery should you see your doctor to remove your staples?";
TO.answerA = "5 days";
TO.answerB = "7 days";
TO.answerC = "10 days";
TO.answerD = "Anytime";
TO.rightAnswer =3;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)


var movie = new MovieObject('https://www.larissatech.com/test/moral2generalenglish.mp4');
PATIENT_OBJECTS.push(movie)


TO = new T();
TO.question = "Once Steri-strips are placed on your wound, what should you avoid until they fall off?";
TO.answerA = "Changing the dressing ";
TO.answerB = "Washing your hands ";
TO.answerC = "Taking a shower ";
TO.answerD = "Picking at the wound";
TO.rightAnswer =4;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)

TO = new T();
TO.question = "What should you do if your wound starts to come apart?";
TO.answerA = "Glue it back together ";
TO.answerB = "Hold deep pressure ";
TO.answerC = "Sew it back together ";
TO.answerD = "Call your doctor ";
TO.rightAnswer =4;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)


var movie = new MovieObject('https://www.larissatech.com/test/moral4generalenglish.mp4');
PATIENT_OBJECTS.push(movie)



TO = new T();
TO.question = "What may indicate an infection of your wound?";
TO.answerA = "Drainage or swelling around the wound";
TO.answerB = "Scab forming around the wound";
TO.answerC = "Body temperature of 99.0 degrees Fahrenheit";
TO.answerD = "Feeling hungry";
TO.rightAnswer =1;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)



TO = new T();
TO.question = "What should you do before taking care of your wound?";
TO.answerA = "Take off the bandage ";
TO.answerB = "Wash your hands ";
TO.answerC = "Wash the wound ";
TO.answerD = "Call for help";
TO.rightAnswer =2;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)



TO = new T();
TO.question = "What combination of foods are best when your wound is healing?";
TO.answerA = "Vegetables, nuts and meat, water, and whole grains";
TO.answerB = "Plenty of meat and milk";
TO.answerC = "Focusing on fruits, water, and whole grains";
TO.answerD = "Sugary foods so I can have energy quickly";
TO.rightAnswer =1;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)





TO = new T();
TO.question = "Which of the following is true about over the counter medicines like Aspirin?";
TO.answerA = "Over the counter medicines can be very critical in my recovery";
TO.answerB = "Over the counter medicines can be as important as prescribed medicines";
TO.answerC = "Even if I feel well, I should not stop taking my medicines without consulting my doctor";
TO.answerD = "All of the statements above are true";
TO.rightAnswer =4;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS);
PATIENT_OBJECTS.push(quiz)


var movie = new MovieObject('https://www.larissatech.com/test/woundcare1english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/woundcare2english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/moral_lesson38_english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/woundcare3english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/woundcare4english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/woundcare5english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/moral_lesson68_english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/woundcare6english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/woundcare7english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/moral_lesson88_english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/woundcare8english.mp4');
PATIENT_OBJECTS.push(movie)

var movie = new MovieObject('https://www.larissatech.com/test/MedicineTaking.mp4');
PATIENT_OBJECTS.push(movie)

TO = new T();
TO.question = "When is it OK to soak your wound?";
TO.answerA = "Anytime";
TO.answerB = "12 Hours after discharge";
TO.answerC = "24 Hours after discharge";
TO.answerD = "Never";
TO.rightAnswer =4;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS,'You should never soak your wound.');
PATIENT_OBJECTS.push(quiz)


TO = new T();
TO.question = "What should you do if your wound dressing becomes soiled?";
TO.answerA = "Clean the dressing and put it back on";
TO.answerB = "Wash the area and leave the dressing off";
TO.answerC = "Clean the area and put on a new dry sterile dressing";
TO.answerD = "Nothing";
TO.rightAnswer =3;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS,'You should clean the area and put on a new dry sterile dressing');
PATIENT_OBJECTS.push(quiz)


TO = new T();
TO.nextType="QUIZ";
TO.question = "How long after your surgery should you see your doctor to remove your staples?";
TO.answerA = "5 days";
TO.answerB = "7 days";
TO.answerC = "10 days";
TO.answerD = "Anytime";
TO.rightAnswer =3;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS,'You need to see your doctor 10 days after your surgery to remove your staples');
PATIENT_OBJECTS.push(quiz)


var movie = new MovieObject('https://www.larissatech.com/test/moral2generalenglish.mp4');
PATIENT_OBJECTS.push(movie)


TO = new T();
TO.question = "Once Steri-strips are placed on your wound, what should you avoid until they fall off?";
TO.answerA = "Changing the dressing ";
TO.answerB = "Washing your hands ";
TO.answerC = "Taking a shower ";
TO.answerD = "Picking at the wound";
TO.rightAnswer =4;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS,'You should never pick at your wound');
PATIENT_OBJECTS.push(quiz)

TO = new T();
TO.question = "What should you do if your wound starts to come apart?";
TO.answerA = "Glue it back together ";
TO.answerB = "Hold deep pressure ";
TO.answerC = "Sew it back together ";
TO.answerD = "Call your doctor ";
TO.rightAnswer =4;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS,'If your wound starts to come apart, call your doctor immediately');
PATIENT_OBJECTS.push(quiz)


var movie = new MovieObject('https://www.larissatech.com/test/moral4generalenglish.mp4');
PATIENT_OBJECTS.push(movie)



TO = new T();
TO.question = "What may indicate an infection of your wound?";
TO.answerA = "Drainage or swelling around the wound";
TO.answerB = "Scab forming around the wound";
TO.answerC = "Body temperature of 99.0 degrees Fahrenheit";
TO.answerD = "Feeling hungry";
TO.rightAnswer =1;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS,'Drainage or swelling around the wound indicates infection');
PATIENT_OBJECTS.push(quiz)



TO = new T();
TO.question = "What should you do before taking care of your wound?";
TO.answerA = "Take off the bandage ";
TO.answerB = "Wash your hands ";
TO.answerC = "Wash the wound ";
TO.answerD = "Call for help";
TO.rightAnswer =2;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS,'Wash your hands carefully before taking care of your wound.');
PATIENT_OBJECTS.push(quiz)



TO = new T();
TO.question = "What combination of foods are best when your wound is healing?";
TO.answerA = "Vegetables, nuts and meat, water, and whole grains";
TO.answerB = "Plenty of meat and milk";
TO.answerC = "Focusing on fruits, water, and whole grains";
TO.answerD = "Sugary foods so I can have energy quickly";
TO.rightAnswer =1;
var quiz = new QuizObject(TO.question,[TO.answerA,TO.answerB,TO.answerC,TO.answerD],TO.rightAnswer,QUESTION_ID++,NUMBER_OF_QUESTIONS,'A balanced diet with vegetables, nuts and meat, water, and whole grains will help you heal better');
PATIENT_OBJECTS.push(quiz)

INDEX_LENGTH = PATIENT_OBJECTS.length;
var closes = new CloseScreen();
PATIENT_OBJECTS.push(closes)
