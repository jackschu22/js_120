let rlSync = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    score: 0,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    pastMoves: {},

    choose() {
      let choice;

      while (true) {
        console.log('\nPlease choose rock, paper, or scissors:');
        choice = rlSync.question().toLowerCase();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },

    storeMove(round) {
    this.pastMoves[`Round ${round}`] = this.move;
    },

  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    pastMoves: {},

    choose: function() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },

    storeMove(round) {
    this.pastMoves[`Round ${round}`] = this.move;
    },
  };

  return Object.assign(playerObject, computerObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  round: 1,

  clearDisplay() {
    console.clear();
  },

  displayBanner() {
    const LOGO = '* * * * * ROCK, PAPER, SCISSORS * * * * *'
    const DASH_X = "-";
    const DASH_Y = "|";
    const CORNER = "+";
    const SPACE = " ";

    console.log(`${CORNER}${DASH_X.repeat(LOGO.length + 2)}${CORNER}`);
    console.log(`${DASH_Y}${SPACE.repeat(LOGO.length + 2)}${DASH_Y}`);
    console.log(`${DASH_Y}${SPACE}${LOGO}${SPACE}${DASH_Y}`);
    console.log(`${DASH_Y}${SPACE.repeat(LOGO.length + 2)}${DASH_Y}`);
    console.log(`${CORNER}${DASH_X.repeat(LOGO.length + 2)}${CORNER}\n`);
  },

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors! Let's play best of five.");
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      this.human.score += 1;
      if (this.human.score === 5) {
        console.log("\n * * * * * You've won the series! * * * * *");
      } else {
        console.log('\nYou win the round!');
      }
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
        (humanMove === 'paper' && computerMove === 'scissors') ||
        (humanMove === 'scissors' && computerMove === 'rock')) {
      this.computer.score += 1;
      if (this.computer.score === 5) {
        console.log("\n :( :( :( Computer has won the series! :( :( :(");
      } else {
        console.log('\nComputer wins the round!');
      }
    } else {
      console.log("\nThe round is a tie!");
    }
  },

  displayScore() {
    console.log(`\nThe current score is ${this.human.score} (You) - ${this.computer.score} (CPU).`)
  },

  displaySeriesSummary() {
    const HEADING = "\n  Round  |  Your Move  |  Computer's Move  |  Outcome";
    const BORDER = '---------+-------------+-------------------+-----------';

    console.log(HEADING);
    console.log(BORDER);

    for (let round in this.human.pastMoves) {
      let humanMove = this.human.pastMoves[round];
      let computerMove = this.computer.pastMoves[round];
      let result;

      if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
        result = ':D';
      
      } else if ((humanMove === 'rock' && computerMove === 'paper') ||
        (humanMove === 'paper' && computerMove === 'scissors') ||
        (humanMove === 'scissors' && computerMove === 'rock')) {
        result = ':('
      } else {
        result = ':|';
      }

      console.log(`${round}${' '.repeat(9 - round.length)}| ${humanMove}${' '.repeat(12 - humanMove.length)}| ${computerMove}${' '.repeat(18 - computerMove.length)}|  ${result}`);
    }

    let humanScore = this.human.score;
    let computerScore = this.computer.score
    let scoreMessage = ` <--   ${humanScore > computerScore ? 'You did it!' : 'Better luck next time...'}`;

    console.log(`\nFinal Score: ${humanScore > computerScore ? humanScore : computerScore} - ${humanScore < computerScore ? humanScore : computerScore}  ${scoreMessage}`);
  },

  playAgain() {
    console.log('\nWould you like to play again? (y/n)');
    let answer = rlSync.question();
    return answer.toLowerCase()[0] === 'y';
  },

  resetScores() {
    this.human.score = 0;
    this.computer.score = 0;
  },

  updateRound() {
    this.round += 1;
  },

  seriesActive() {
    let humanScore = this.human.score;
    let computerScore = this.computer.score;

    return humanScore < 5 && computerScore < 5;
  },

  play() {
    this.clearDisplay();
    this.displayBanner();
    this.displayWelcomeMessage();

    while (true) {

      while (this.seriesActive()) {
        if (this.round > 1) this.displayScore();
        this.human.choose();
        this.human.storeMove(this.round);
        this.computer.choose();
        this.computer.storeMove(this.round);
        this.clearDisplay();
        this.displayBanner();
        this.displayWinner();
        this.updateRound();
      }

      this.displaySeriesSummary();
      if (!this.playAgain()) break;
      this.resetScores();
      this.clearDisplay();
      this.displayBanner();
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();