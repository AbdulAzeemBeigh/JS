let secretNumber = Math.trunc(Math.random() *20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
     const guess = Number(document.querySelector('.guess').value) ;
     if(!guess){
        document.querySelector('.message').textContent = 'No number';
     }else if(guess === secretNumber){

        document.querySelector('.message').textContent = 'correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b37';
        document.querySelector('.number').style.width ='30rem';
        highscore = score;
        document.querySelector('.highscore').textContent=highscore;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
     }else if (guess > secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent = 'Too high';
        score --;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'you lost the game'
        }
     }else if (guess < secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent = 'Too Low';
        score --;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent ='you lost the game'
        }
     }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent= 'start guessing......';
    secretNumber = Math.trunc(Math.random() *2) +1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value = ' ' ;

})
