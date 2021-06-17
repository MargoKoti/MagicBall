const ball = document.querySelector('img');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const input = document.querySelector('input');


const answerArr = ['Tak!','Nie','Być może','Nie chcesz znać odpowiedzi...','Ciężko stwierdzić'];


const shakeBall =() =>{

ball.classList.add('shake-animation');
setTimeout(checkInput,1000);
}
const checkInput =()=>{
    error.textContent="";
    if(input.value !=='' && input.value.slice(-1) =='?' ){
        generateAnswer();
    }
    else if(input.value ==""){
        answer.textContent ="";
        error.textContent = "Pusta zawartość!";
    }
    else{
        answer.textContent ="";
        error.textContent = "To musi być pytanie!";
    }
    ball.classList.remove('shake-animation');
}

const generateAnswer =() =>{

const number = Math.floor(Math.random()*5);
answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`;
console.log(number);
}


ball.addEventListener('click', shakeBall);