const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  // Your code here 
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");


}

function getWinner(move1, move2) {
  // Your code here 
  if (VALID_MOVES[move1].winsAgainst === move2) {
    console.log("You win!\n");
    wins++;
    return 1;
  } else if (VALID_MOVES[move2].winsAgainst === move1) {
    console.log("You lose...\n");
    losses++;
    return -1;
  } else {
    console.log("You tie.\n");
    ties++;
    return 0;
  }
}

function getCPUMove() {
  // Your code here 
  let arr = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

function processMove(cmd, cpu) {
  console.log(`You pick ${cmd}, computer picks ${cpu}.`)
  // Your code here 
  if (cpu === 'r') {
    if (cmd === 'r') {
      console.log(`You tie.\n`)
    } else if (cmd === 'p') {
      console.log("You win!\n")
    } else {
      console.log(`You lose...\n`)
    }
  } else if (cpu === 'p') {
    if (cmd === 'p') {
      console.log(`You tie.\n`)
    } else if (cmd === 's') {
      console.log("You win!\n")
    } else {
      console.log(`You lose...\n`)
    }
  }
  if (cpu === 's') {
    if (cmd === 's') {
      console.log(`You tie.\n`)
    } else if (cmd === 'r') {
      console.log("You win!\n")
    } else {
      console.log(`You lose...\n`)
    }
  }

}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp()
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]) {
      let cpu = getCPUMove()

      console.log(`You pick ${cmd}, computer picks ${cpu}.`);

      getWinner(cmd, cpu)
    } else {
      console.log("\nInvalid command.\n");
      console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n");
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
