import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function main(): Promise<void> {
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100.");
    console.log("You need to guess it within the given number of attempts based on the difficulty level.\n");

    rl.question('Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n\nEnter your choice: ', (level: string) => {
        let maxChance = 0;
        switch (level) {
            case '1':
                maxChance = 10;
                console.log("Great! You have selected the Easy difficulty level.")
                break;
            case '2':
                maxChance = 5;
                console.log("Great! You have selected the Medium difficulty level.")
                break;
            case '3':
                maxChance = 3;
                console.log("Great! You have selected the Hard difficulty level.")
                break;
            default:
                console.log("Invalid choice, defaulting to Medium difficulty.");
                maxChance = 5;
        }
        console.log("Let's start the game!\n");

        const targetNumber: number = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        const makeGuess = () => {
            rl.question('Enter your guess: ', (guessNum: string) => {
                const parsedGuessNum: number = parseInt(guessNum);
                if (isNaN(parsedGuessNum)) {
                    console.log("Please enter a valid number.");
                    makeGuess();
                    return;
                }

                attempts++;

                if (targetNumber === parsedGuessNum) {
                    console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                    rl.close();
                    return;
                }
                else if (targetNumber > parsedGuessNum) {
                    console.log(`Incorrect! The number is greater than ${parsedGuessNum}.`);

                }
                else if (targetNumber < parsedGuessNum) {
                    console.log(`Incorrect! The number is less than ${parsedGuessNum}.`);

                }

                if (attempts < maxChance) {
                    makeGuess()
                }
                else {
                    rl.close();
                }
            })
        }

        makeGuess();
    })

}

main()