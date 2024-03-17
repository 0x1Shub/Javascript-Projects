const quizData = [
  {
    question: "What is the capital of India ?",
    options: ["Mumbai", "New Delhi", "Chennai", "Banglore"],
    answer: "New Delhi",
  },
  {
    question: "What is 2+2",
    options: ["22", "2", "3", "4"],
    answer: "4",
  },
];

let questionIndex = 0;

// Render Quetion

function loadQuestions(questionIndex) {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuestion = quizData[questionIndex];

  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.dataset.index = index; // Add data-index attribute to identify the option
    optionElement.addEventListener("click", () => {
      selectAnswer(option, currentQuestion.answer);
    });
    optionsElement.appendChild(optionElement);
  });
}

// Select option

function selectAnswer(selectedOption, correctAnswer) {
  const resultElement = document.getElementById("result");
  const optionButtons = document.querySelectorAll("#options button");
  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  if (selectedOption === correctAnswer) {
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = "Incorrect!";
  }

  setTimeout(() => {
    document.getElementById("result").textContent = "";
    if (questionIndex < quizData.length - 1) {
      questionIndex++;
      loadQuestions(questionIndex);
    } else {
      endQuiz();
    }
  }, 1000);
}

// Move to next or prev question

function onNextButtonClick() {
  moveToNextQuestion();
}

function onPrevButtonClick() {
  moveToPrevQuestion();
}

const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", onNextButtonClick);

const prevButton = document.getElementById("prev-btn");
prevButton.addEventListener("click", onPrevButtonClick);

function moveToNextQuestion() {
  if (questionIndex < quizData.length - 1) {
    questionIndex++;
    loadQuestions(questionIndex);
    document.getElementById("prev-btn").disabled = false;
  }
  if (questionIndex === quizData.length - 1) {
    document.getElementById("next-btn").disabled = true;
  }
}

function moveToPrevQuestion() {
  if (questionIndex > 0) {
    questionIndex--;
    loadQuestions(questionIndex);
    document.getElementById("next-btn").disabled = false;
  }
  if (questionIndex == 0) {
    document.getElementById("prev-btn").disabled = true;
  }
}

// End Quiz

function endQuiz() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("btn");
  const resultElement = document.getElementById("result");

  questionElement.textContent = "Quiz Completed!";
  optionsElement.textContent = "";
  submitButton.style.display = "none";

  document.getElementById("next-btn").style.display = "none";
  document.getElementById("prev-btn").style.display = "none";

  const score = calculateScore();
  resultElement.textContent = `Your score: ${score} / ${quizData.length}`;
}

// Calculate the Score

function calculateScore() {
  let score = 0;
  const optionButtons = document.querySelectorAll("#options button");
  optionButtons.forEach((button) => {
    if (button.classList.contains("selected")) {
      const questionIndex = button.parentElement.dataset.index;
      if (quizData[questionIndex].answer === button.textContent) {
        score++;
      }
    }
  });
  return score;
}

loadQuestions(questionIndex);

// Fetch Quiz data

function fetchQuizData() {
  return new Promise((res, err) => {
    setTimeout(() => {
      res(quizData);
    });
  });
}

fetchQuizData()
  .then((data) => {
    console.log("Quiz data : ", data);
  })
  .catch((error) => {
    console.error("Error while fetching data : ", error);
  });
