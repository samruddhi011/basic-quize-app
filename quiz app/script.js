const questions =[
    {
        question: "which is largest animal in world?",
        answers:[
            {text: "Shark", correct:false},
            {text: "Blue whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Giraffe", correct:false}
        ]
    },
    {
        question: "which is the smallest continent?",
        answers:[
            {text: "Arctic", correct:false},
            {text: "Asia", correct:false},
            {text: "Australia", correct:true},
            {text: "Africa", correct:false}
        ]
    },
    {
        question: "which is the largest desert in world?",
        answers:[
            {text: "Kalahari", correct:false},
            {text: "Gobi", correct:false},
            {text: "Sahara", correct:true},
            {text: "Antarctica", correct:false}
        ]
    },
    {
        question: "which is the smallest country in world?",
        answers:[
            {text: "Vatican city", correct:true},
            {text: "Bhutan", correct:false},
            {text: "Nepal", correct:false},
            {text: "Shri Lanka", correct:false}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function  showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionuestionIndex];
    let questionNo=currentQuestionuestionIndex+1;
    questionElement.innerHTML= questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionuestionIndex++;
    if(currentQuestionuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    
})
startQuiz();