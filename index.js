const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.Continue-btn');
const quizsection = document.querySelector('.quiz-section');
const quizbox = document.querySelector('.quiz-box');




startBtn.onclick = () =>{
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () =>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');

}

continueBtn.onclick = () => {
    quizsection.classList.add('active');
    quizbox.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');

    showQuestions(0);
    questionCounter(1);
}

let questionCount = 0;
let questionNumb = 1;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () =>{
    if(questionCount < questions.length -1){
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);
    }
    else{
        console.log('Question completed');
    }
}

const optionList = document.querySelector('.option-list');


//getting questiona dn options from array

function showQuestions(index) {
    const questionText = document.querySelector('.question');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag

    const option = document.querySelectorAll('.option');
    for(let i=0; i < option.length; i++) {
        option[i].setAttribute('oneclick','op')
    }
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`
}