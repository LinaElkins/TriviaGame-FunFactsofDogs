function submitAnswers() {
    var totalQ = 6;
    var score = 0;

    //Get player answer inputs
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;

    //Set our question loop
   

    for(i=1; i<=totalQ; i++) {
        if(eval('q'+i) == null || eval('q'+i) =='') {
            alert(' You missed question  ' +  i);
            return false;
        }
    }

    //Correct answers for the questions
    var answers = ['b','b','b','d','a','c'];
    
    //check players answers if correct or not
    for(i=1; i<=totalQ; i++) {
        if(eval('q'+i)== answers[i-1]) {
            score++;
        }
    }
    //display results
    alert(" you scored  "  +  score + "  out of  " + totalQ);

    return false;
}