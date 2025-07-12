let player1Input = document.querySelector('.player1Input');
let player1Btn = document.querySelector('.player1Btn');

let player2Input = document.querySelector('.player2Input');
let player2Btn = document.querySelector('.player2Btn');

let heading = document.querySelector('.heading');

let error = document.querySelector('.error');
let chanceTitle = document.querySelector('.chanceTitle');
let chance = document.querySelector('.chance');


let chanceCount = 5;

// Function to update the chance count
player1Btn.addEventListener('click', function() {
    
    if (player1Input.value === "") {
        error.innerHTML = "Please enter a valid something";
    }else{
        if (isNaN(player1Input.value)) {
            error.innerHTML = "Please enter a valid number";
        } else{
            error.innerHTML = "";

            if (player1Input.value > 10 || player1Input.value < 1) {

                error.innerHTML = "Please enter a number between 1 and 10";

            } else {
                heading.innerHTML = "Player-02 Turn";
                player1Input.style.display = "none";
                player1Btn.style.display = "none";
                player2Input.style.display = "inline-block";
                player2Btn.style.display = "inline-block";
                chanceTitle.style.display = "block";
                chance.innerHTML = chanceCount;
            }
        }
    }
    
});

player2Btn.addEventListener('click', function() {
    if (player2Input.value === "") {
        error.innerHTML = "Please enter a valid something";
    } else {
        if (isNaN(player2Input.value)) {
            error.innerHTML = "Please enter a valid number";
        } else {
            error.innerHTML = "";

            if (player2Input.value > 10 || player2Input.value < 1) {
                error.innerHTML = "Please enter a number between 1 and 10";
            } else {
                // console.log("Player 2 guessed: " + player2Input.value);
                // error.innerHTML = "Player 2 guessed: " + player2Input.value;

                if(chanceCount > 0){
                    chanceCount--;
                    chance.innerHTML = chanceCount;

                    if (player2Input.value == player1Input.value) {
                        error.innerHTML = "Congratulations! Player-02 guessed the correct number!";
                        heading.innerHTML = "Player-02 Wins!";
                        player2Input.style.display = "none";
                        player2Btn.style.display = "none";
                    } else {
                        error.innerHTML = "Wrong guess! Try again.";
                        if (chanceCount === 0) {
                            heading.innerHTML = "Game Over! Player-01 Wins!";
                            player2Input.style.display = "none";
                            player2Btn.style.display = "none";
                        }
                    }
                } else{
                    error.innerHTML = "No chances left! Player-01 Wins!";
                    heading.innerHTML = "Game Over! Player-01 Wins!";
                    player2Input.style.display = "none";
                    player2Btn.style.display = "none";
                }

            }
        }
    }
});

// isNaN() is a method 
// For example
// console.log("123"/2)
// console.log("123"*2)
// console.log("Hello"*2)

