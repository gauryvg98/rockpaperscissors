const game = () => {
    let pscore = 0;
    let cscore = 0;

    const startGame = () => {
        const plyBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector('.match');
        plyBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');
        const computerOptions = ["rock", "paper", "scissors"];

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        })

        options.forEach(option => {
            option.addEventListener('click', () => {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                setTimeout(() => {
                    compareHands(option.className, computerChoice);

                    playerHand.src = `./assets/${option.className}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";


            });
        })

    };
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = 'Its a TIE';
            return;
        }
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player WINS';
            } else {
                winner.textContent = 'Computer WINS';
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player WINS';
            } else {
                winner.textContent = 'Computer WINS';
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player WINS';
            } else {
                winner.textContent = 'Computer WINS';
            }
        }


        //UPDATE SCORES


        if (winner.textContent === 'Player WINS') {
            pscore++;
        } else if (winner.textContent === 'Computer WINS') {
            cscore++;
        }
        const fs_p = document.querySelector(".player-score p");
        const fs_c = document.querySelector(".computer-score p");
        fs_p.textContent = pscore;
        fs_c.textContent = cscore;
        return;
    }

    startGame();
    playMatch();

};
game();