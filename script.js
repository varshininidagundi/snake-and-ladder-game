
let p1Total =0
let p2Total=0
let diceRollingAudio = new Audio('dice.mp3')
let ladderAudio = new Audio('ladder.mp3')
let snakeAudio = new Audio('snake.mp3')
let winnerAudio = new Audio('winner.mp3')
let toggle = 1
let p1Started = false;
let p2Started = false;

let storedPlayer1 = localStorage.getItem('playerone');
let storedPlayer2 = localStorage.getItem('playertwo');
if (storedPlayer1 && storedPlayer2) {
    console.log('Player 1 from localStorage:', storedPlayer1);
    console.log('Player 2 from localStorage:', storedPlayer2);
}
else {
    console.error('Values not found in localStorage.');
}
document.getElementById('togg').innerText=`${storedPlayer1}'s/black Player's turn to roll dice--`
alert('welcome to snake and lader game',storedPlayer1,storedPlayer2)

function winner(total,player){
    if ( total >= 100){
        if(player == 1){
            winnerAudio.play()
            setTimeout(alert("player 1 wins the game"), 7000);
        }
        else{
            winnerAudio.play()
            setTimeout(alert("player 2 wins the game"), 7000);
        }
        location.reload();
    }
}
// const myTimeout = setTimeout(winner, 5000);

function game(player, diceScore, playerScore){
    let total 
    if(player == 1)
    {
        previousp1Total = p1Total
        console.log(previousp1Total);
        if (diceScore !== 6 && p1Total !== 0 && !p1Started) {
            p1Started = false;
            alert('u need 6 to start the game')
            return;
        }
        if(diceScore === 6 && p1Total === 0 && !p1Started) {
            p1Started = true;
        }
        if(p1Started){
            p1Total += diceScore 
            if (p1Total > 100) {
                p1Total = previousp1Total; // Ignore the current score if score goes above 100
            }
            if (p1Total == 4){
                p1Total = 25
                diceRollingAudio.pause()
                ladderAudio.play()
            }
            else if (p1Total == 13){
                p1Total = 46
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p1Total == 33){
                p1Total = 49
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p1Total == 42){
                p1Total = 63
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p1Total == 50){
                p1Total = 69
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p1Total == 62){
                p1Total = 81
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p1Total == 74){
                p1Total = 92
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p1Total == 27){
                p1Total = 5
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p1Total == 40){
                p1Total = 3
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p1Total == 43){
                p1Total = 18
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p1Total == 54){
                p1Total = 31 
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p1Total == 66){
                p1Total = 45
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p1Total == 89){
                p1Total = 53
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p1Total == 76){
                p1Total = 58
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p1Total == 99){
                p1Total = 41
                diceRollingAudio.pause()
                snakeAudio.play()
            }
            console.log("p1 total",p1Total)
            let prevElement = document.getElementById(`${previousp1Total}`);
            let currentElement = document.getElementById(`${p1Total}`);

            if (prevElement) {
                prevElement.innerHTML = ''; // Clear previous content
            }

            if (currentElement) {
                currentElement.innerHTML = `<div class="d-flex align-items-center justify-content-center player1"></div>`;
            }

            total = p1Total
        }
    }
    else if (player == 2)
    {
        if (diceScore !== 6 && p2Total !== 0 && !p2Started) {
            p2Started = false;
            alert('u need 6 to start the game')
            return;
        }
        if(diceScore === 6 && p2Total === 0 && !p2Started) {
            p2Started = true;
        }
        if(p2Started){
            periviousp2Total = p2Total
            console.log(periviousp2Total);
            p2Total += diceScore 
            if (p2Total > 100) {
                p2Total = periviousp2Total; // Ignore the current score if score goes above 100
            }
            if (p2Total == 4){
                p2Total = 25
                diceRollingAudio.pause()
                ladderAudio.play()
            }
            else if (p2Total == 13){
                p2Total = 46
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p2Total == 33){
                p2Total = 49
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p2Total == 42){
                p2Total = 63
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p2Total == 50){
                p2Total = 69
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p2Total == 62){
                p2Total = 81
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            else if (p2Total == 74){
                p2Total = 92
                diceRollingAudio.pause()
                ladderAudio.play()
            } 
            
            else if (p2Total == 27){
                p2Total = 5
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p2Total == 40){
                p2Total = 3
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p2Total == 43){
                p2Total = 18
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p2Total == 54){
                p2Total = 31
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p2Total == 66){
                p2Total = 45
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p2Total == 89){
                p2Total = 53
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p2Total == 76){
                p2Total = 58
                diceRollingAudio.pause()
                snakeAudio.play()
            } 
            else if (p2Total == 99){
                p2Total = 41
                diceRollingAudio.pause()
                snakeAudio.play()
            }
            console.log("p2 total",p2Total);
            let prevElement = document.getElementById(`${periviousp2Total}`);
            let currentElement = document.getElementById(`${p2Total}`);

            if (prevElement) {
                prevElement.innerHTML = ''; // Clear previous content
            }

            if (currentElement) {
                currentElement.innerHTML = `<div class="d-flex align-items-center justify-content-center player2"></div>`;
            }

            total = p2Total
        }
    setTimeout(() => { winner(p2Total, player); }, 4000);
}
}

let dice = document.querySelector('#dice')
let diceChange = () =>{
    diceRollingAudio.play();
    let randomDice = Math.floor((Math.random()*6)+1)
    if (randomDice === 1){
        dice.src = "one.png"
    }
    else if(randomDice === 2 ){
        dice.src = "two.png"
    }
    else if(randomDice === 3 ){
        dice.src = "three.png"
    }
    else if(randomDice === 4 ){
        dice.src = "four.png"
    }
    else if(randomDice === 5 ){
        dice.src = "five.png"
    }
    else{
        dice.src = "six.png"
    }
    console.log(randomDice)
    if (toggle == 1 ){
        document.getElementById('togg').innerText=`${storedPlayer2}'s/red Player's turn to roll dice--- `
        game(1, randomDice, p1Total)
        toggle=0;
    }
    else{
        document.getElementById('togg').innerText=`${storedPlayer1}'s/black Player's turn to roll dice--`
        game(2, randomDice, p2Total)
        toggle=1
    }
}
dice.addEventListener('click', diceChange);
//step by step movement 
//if both players overlap then clear pervious value of that perticular player only
