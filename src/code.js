import './globals';

import readInput from './readInput';

import chooseAction from './engine';

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * */

let players = [];
let orders = {};

// game loop
while (true) {
  readInput(players, orders);
  // Write an action using console.log()
  // To debug: debug('Debug messages...');

  debug(players, orders);
  const nextAction = chooseAction(players, orders);
  // in the first league: BREW <id> | WAIT; later: BREW <id> | CAST <id> [<times>] | LEARN <id> | REST | WAIT
  debug(nextAction);
  console.log(nextAction);
}
