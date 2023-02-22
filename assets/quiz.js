const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerEl = document.querySelector("#timer")
const submitBtn = document.querySelector("#submitBtn")
const highscoresListEL = document.querySelector("#highScoresList")


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++  
    if (currentQuestionIndex >= questions.length) {
        window.location.replace('highscores.html')
    } else {
        setNextQuestion()
    }
    
})

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
 }

function initCountdown() {
    countdown = COUNTDOWN_START_SECONDS;
    countdownEl.textContent = countdown;

    countdownIntervalId = setInterval(function() {
        if (countdown > 0) {
            countdown--;
            countdownEl.textContent = countdown;
        } else {
            handleEndQuiz();
        }

    }, 1000);
}

 function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer
        button.classList.add('btn')
        if (answer === question.correctAnswer) {
            button.dataset.correct = true
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
 }


 function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
 }
 
 function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(selectedButton, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        resetState(); 
        questionContainerElement.classList.add('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('worng')
}

 const questions = [
    {
        question: 'Javascript is an ____ language?',
        answers: [
            "Object-Oriented",
            "Object-Based",
            "Procedural",
            "None of the above"
        ],
        correctAnswer: "Object-Oriented"
    },
    {
        question: 'Which of the following are closures in Javascript?',
        answers: [
            "All of the above",
            "variables",
            "Functions",
            "Objects"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: 'Which of the following is not a Javascript framework?',
        answers: [
            "Cassandra",
            "Node",
            "Vue",
            "React"
        ],
        correctAnswer: "Cassandra"
    },
    {
        question: 'How to stop an interval timer in javascript?',
        answers: [
            "ClearInterval",
            "clearTimer",
            "intervalOver",
            "None of the above"
        ],
        correctAnswer: "ClearInterval"
    },
    {
        question: 'Which of the following are not server-side Javascript objects?',
        answers: [
            "All of the above",
            "Date",
            "FileUpload",
            "Function"
        ],
        correctAnswer: "All of the above"
    },
 ]


const highScores = localStorage.getItem("highscores");

if (highscores === null) {
    highscores = [];
} else {
    highScores = JSON.deserialize("highscores")
}

localStorage.setItem("highScores")


 function handleEndQuiz() {
    questionElement.textContent =" ";
    startButton.setAttribute("style, display/; block;");
    startButton.textContent = "Try Again";
    clearInterval(countdownIntervalId);

 }