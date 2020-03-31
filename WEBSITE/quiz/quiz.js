function calculateScore(){
  var currentQ = "q";
  var globalScore = 0;
  for(var a = 1; a < 8; a++){
    console.log(currentQ);
    for(var b = 1; b < 3; b++){
    currentQ = "q" + a; 
      if(b == 1){
        currentQ = currentQ + "a"; 
      } else if (b == 2){
        currentQ = currentQ + "b"; 
      } else 
        currentQ = currentQ + "c";

      if (document.getElementById(currentQ).checked){
          currentScore = document.getElementById(currentQ).value;
          globalScore = globalScore + currentScore;
    }
  }
var answer = document.getElementById("answer");

if (globalScore==0){
  answer.innerText = "You need to complete the quiz!!"; 
}   else if  (globalScore>0 && globalScore <=11){   
  answer.innerText = "Result: You are a Noob. A Noob is a newbie and should not be pursing a career in hacking.";
}   else if (globalScore>11 && globalScore <=20){
  answer.innerText= "Result: You have the potential to be the greatest hacker. Maybe you should consider a change of career?"; 
}   else if (globalScore>20 && globalScore <=24){
  answer.innerText = "Result: You are a pro hacker. But you knew that before you completed this quiz.";
}
}
}
