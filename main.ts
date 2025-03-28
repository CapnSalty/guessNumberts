function _randomNumberGuessingGame(): void{
    const targetNumber: number = Math.floor(Math.random() * 100) + 1; //Generates random number up to 100, the "+ 1" raises lowest value range to 1.
    let attempts: number = 0;
    let guess: number | null = null; //Allows guess to hold number, but null allows it to be uninitialized until input is made for variable"
    const maxAttempts = 10
    let replay:boolean = true;
    let response: string;

    console.log("Welcome to GUESS THAT NUMBER!");
    
    const name: string | null = prompt("What is your name, contestant?");

    if(name) {
        console.log("Welcome, ${name}!");
    } else {
        console.log("No name entered.");
    }

    console.log("Alright, ${name}, I am thinking of a number between 1 and 100.");
    console.log("You only have ${maxAttempts} attempts to get it correctly.");
    

    while(guess !== targetNumber){
        guess = parseInt(prompt("What is your guess?") || " ");
        attempts++;
        
        if(isNaN(guess)){
           console.log("Invalid input. Please enter a number");
        } else if (guess < targetNumber){
            console.log("Too low!");
        } else if (guess > targetNumber){
            console.log("Too high!");
        } else {
            console.log("Congratulations! You guessed the number in ${attenmpts} attempts.");
        }
    }   
    if (attempts == maxAttempts){
        console.log("Unfortunately, you're out of attempts.");
        console.log("The correct number was ${targetNumber}.");
        
        const response = prompt("Would you like to play again? Please enter [y/n].");

        if(response == "y"){
            let replay = true;
        } else {
            let replay = false;
        }
        
        console.log("Thanks for playing! See you next time!");
    }
}