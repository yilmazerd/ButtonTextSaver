
  $(document).ready(function() {
  $(".quiz-answer-option").click(function() {
    console.log("THIS IS ONE")    
    console.log('You selected answer: ' +$(this).data("href"))
    PATIENT_OBJECTS[CURRENT_INDEX].givenanswer = $(this).data("href");
    quiz.answerGiven($(this).data("href"))

    });


   $(".quiz-answer-option").click(function() {
     playAudio();
     $(".quiz-answer-option").css("background",QUIZ_BUTTON_CLEAR_COLOR_INSIDE);
     $(".quiz-answer-option").css("border",QUIZ_BUTTON_CLEAR_COLOR_BORDER);
     $(this).css("background-color","#5fd119");
     $(this).css("border","solid 2px #069e08");
    });
   

  $("#quiz_next").click(function() {
    quiz.nextPressed();
  }
  )

  $("#quiz_previous").click(function() {
    quiz.previousPressed();
  }
  )
  });

   $(".movie-buttons-left").click(function() {
   playAudio();
   $(".quiz-answer-option").css("background","#fd9535");
   $(".quiz-answer-option").css("border","solid 2px #d27d00");
  });


    function playAudio() { 
      let x = document.getElementById('audioForClick')
      x.play(); 
  } 



  var singleNumber = function(nums) {
    var tarik = [];
    var sametout = [];
    helva = 0;
    for (i=0;i<nums.length;i++) {
        tarik[nums[i]]++;
        console.log(tarik)
        if (tarik[nums[i]]==2){
        sametout.push(tarik[nums[i]]);
        helva++;
    };
     if (helva==2) {return sametout;}
    }
};
