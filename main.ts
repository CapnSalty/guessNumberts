function randomNumberGuessingGame(): void {
    const targetNumber: number = Math.floor(Math.random() * 100) + 1; //Generates random number up to 100, the "+ 1" raises lowest value range to 1.
    let attempts: number = 0;
    let guessCorrectly = false;
    const maxAttempts = 5

    console.log("Welcome to GUESS THAT NUMBER!");
    
    const name: string | null = prompt("What is your name, contestant?");

    if(name) {
        console.log("Welcome, " + name ,"!");
    } else {
        console.log("No name entered.");
    }

    console.log("Alright, " + name ,"I am thinking of a number between 1 and 100.");
    console.log("You only have", + maxAttempts, "attempts to get it correctly.");
    

    while(!guessCorrectly && attempts < maxAttempts){
        const guessInput = parseInt(prompt("What is your guess?") || " ");
        attempts++;
        
        if(isNaN(guessInput) || guessInput < 1 || guessInput > 100) {
           console.log("Invalid input. Please enter a number");
           continue;
        }

        if (guessInput < targetNumber){
            console.log("Too low!");
        } else if (guessInput > targetNumber){
            console.log("Too high!");
        } else {
            console.log("Congratulations! You guessed the number in", + attempts, "attempts.");
            guessCorrectly = true;
        }
    }   
    if (attempts == maxAttempts && !guessCorrectly){
        console.log("Unfortunately, you're out of attempts.");
        console.log("The correct number was ", + targetNumber ,".");
    }
        
    const playAgainInput = prompt("Would you like to play again? Please enter [y/n].");
    if(playAgainInput === "yes" || playAgainInput === "y") {
        randomNumberGuessingGame();
    } else {
            console.log("Thanks for playing! See you next time!");   
        }
    }


 randomNumberGuessingGame();