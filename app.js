// QUESTIONS

const questions = [
    {
      "question": "Pick a social media platform",
      "answer1": "Instagram",
      "answer1Total": "1",
      "answer2": "Twitter",
      "answer2Total": "2",
      "answer3": "Reddit",
      "answer3Total": "3"
    },
    {
      "question": "Pick a computer",
      "answer1": "Apple MacBook",
      "answer1Total": "1",
      "answer2": "Microsoft Surface Pro",
      "answer2Total": "2",
      "answer3": "Alienware PC",
      "answer3Total": "3"
    },
    {
      "question":
        "Who of these do you identify with the most?",
      "answer1": "Donald Trump",
      "answer1Total": "1",
      "answer2": "Steve Jobs",
      "answer2Total": "2",
      "answer3": "Julian Assange",
      "answer3Total": "3"
    },
    {
      "question": "Your internet suddenly goes off, what do you do?",
      "answer1": "The internet went off?",
      "answer1Total": "1",
      "answer2": "Call someone and complain",
      "answer2Total": "2",
      "answer3":
        "Turn the off and on at the plug",
      "answer3Total": "3"
    },
    {
      "question": "If you have the chance to try out any of these for free, which would you pick?",
      "answer1": "Apple Watch",
      "answer1Total": "1",
      "answer2": "Segway",
      "answer2Total": "2",
      "answer3": "Oculus Rift",
      "answer3Total": "3"
    },
    {
      "question":
        "If you had the choice, who would you choose to hack?",
      "answer1":
        "Your favourite online shopping site",
      "answer1Total": "1",
      "answer2": "Surveillance system",
      "answer2Total": "2",
      "answer3": "Silicon Valley's network",
      "answer3Total": "3"
    },
    {
      "question": "What is JavaScript?",
      "answer1": "Is that a new Starbucks item?",
      "answer1Total": "1",
      "answer2": "Is that something to do with technology?",
      "answer2Total": "2",
      "answer3": "Is it a progamming language used to build websites?",
      "answer3Total": "3"
    },
     {
      "question": "What does HTML stand for?",
      "answer1": "A home cooked hot meal ",
      "answer1Total": "1",
      "answer2": "Hotmail",
      "answer2Total": "2",
      "answer3": "Hypertext Markup Language",
      "answer3Total": "3"
    }
  ]
 
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      ////Add the answer score to the score array
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          result.innerHTML =
           `<h1 class="final-score">You Scored: ${totalScore}</h1>
           <div class="hacker type">
              <h1>End of quiz results</h1>
              <p>Check your score below to find out what type of hacker you are:</p>
              <p>18 - 24- You Need Help</p>
              <p>10 - 18 - Good Soul</p>
              <p>0 - 10 - Meh </p>
          </div>
          <button class="restart">Restart Quiz</button>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);
