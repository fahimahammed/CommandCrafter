# Number Guessing Game

Welcome to the **Number Guessing Game**, a simple command-line game where you test your luck by guessing a number randomly selected by the computer. The game gives you a limited number of chances based on the difficulty level to guess the correct number.

## Features

- **Random Number Generation**: The computer randomly selects a number between 1 and 100.
- **Difficulty Levels**:
  - **Easy**: 10 chances to guess the number.
  - **Medium**: 5 chances to guess the number.
  - **Hard**: 3 chances to guess the number.
- **User Interaction**: The user guesses the number, and the game provides feedback if the guess is too high or too low.
- **Game End**: The game ends either when the user guesses correctly or when the chances run out.
- **Multiple Rounds**: After each round, the user will be asked if they want to play again.
  
## Project Page

You can find more information, view the project’s roadmap, and access additional details on the project page:
[Number Guessing Game Project Roadmap](https://roadmap.sh/projects/number-guessing-game)

## How to Play

1. When the game starts, select a difficulty level:
   - **Easy**: 10 chances to guess the number.
   - **Medium**: 5 chances to guess the number.
   - **Hard**: 3 chances to guess the number.
2. Enter your guess, and the game will tell you whether the number is higher or lower than your guess.
3. If you guess correctly, you will win the game, and it will show how many attempts it took.
4. If you run out of attempts, the correct number will be revealed, and you can try again.
5. After the game ends, you will be asked if you want to play another round.

## Installation

Follow these steps to install and run the game locally:

1. **Clone this repository**:
   
2. **Navigate to the project directory**:
   
3. **Install dependencies**:
   Make sure you have `Node.js` and `npm` installed. Then run:
   ```bash
   npm install
   ```

## Running the Game

To start the game, run the following command:

```bash
npm run game
```

This will use `ts-node` to compile and run the game in your terminal.

## Technologies Used

- **TypeScript**: For writing the game's logic.
- **Node.js**: To run the game on the command line.
