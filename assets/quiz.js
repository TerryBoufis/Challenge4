const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
 }

 function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
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
            { text: 'Object-Oriented', correct: true },
            { text: 'Object-Based', correct: false },
            { text: 'Procedural', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        question: 'Which of the following are closures in Javascript?',
        answers: [
            { text: 'All of the above', correct: true },
            { text: 'variables', correct: false },
            { text: 'Functions', correct: false },
            { text: 'Objects', correct: false }
        ]
    },
    {
        question: 'Which of the following is not a Javascript framework?',
        answers: [
            { text: 'Cassandra', correct: true },
            { text: 'Node', correct: false },
            { text: 'Vue', correct: false },
            { text: 'React', correct: false }
        ]
    },
    {
        question: 'How to stop an interval timer in javascript?',
        answers: [
            { text: 'ClearInterval', correct: true },
            { text: 'clearTimer', correct: false },
            { text: 'intervalOver', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        question: 'Which of the following are not server-side Javascript objects?',
        answers: [
            { text: 'All of the above', correct: true },
            { text: 'Date', correct: false },
            { text: 'FileUpload', correct: false },
            { text: 'Function', correct: false }
        ]
    },
 ]
