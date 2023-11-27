/*document.querySelector('.check').addEventListener('click',function() {
    console.log(document.querySelector('.guess').value);
});*/

let secretNumber = Math.trunc(Math.random() *20)+1;
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
     const guess = Number(document.querySelector('.guess').value) ;
     if(!guess){
        document.querySelector('.message').textContent = 'No number';
     }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'correct Number';
        document.querySelector('.number').textContent = secretNumber;
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

