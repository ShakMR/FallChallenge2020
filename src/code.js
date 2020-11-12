import { debug } from './Utils';
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
  const actionCount = parseInt(readline()); // the number of spells and recipes in play
  for (let i = 0; i < actionCount; i++) {
    var inputs = readline().split(' ');
    const actionId = parseInt(inputs[0]); // the unique ID of this spell or recipe
    const actionType = inputs[1]; // in the first league: BREW; later: CAST, OPPONENT_CAST, LEARN, BREW
    const delta0 = parseInt(inputs[2]); // tier-0 ingredient change
    const delta1 = parseInt(inputs[3]); // tier-1 ingredient change
    const delta2 = parseInt(inputs[4]); // tier-2 ingredient change
    const delta3 = parseInt(inputs[5]); // tier-3 ingredient change
    const price = parseInt(inputs[6]); // the price in rupees if this is a potion
    const tomeIndex = parseInt(inputs[7]); // in the first two leagues: always 0; later: the index in the tome if this is a tome spell, equal to the read-ahead tax
    const taxCount = parseInt(inputs[8]); // in the first two leagues: always 0; later: the amount of taxed tier-0 ingredients you gain from learning this spell
    const castable = inputs[9] !== '0'; // in the first league: always 0; later: 1 if this is a castable player spell
    const repeatable = inputs[10] !== '0'; // for the first two leagues: always 0; later: 1 if this is a repeatable player spell
  }
  for (let i = 0; i < 2; i++) {
    var inputs = readline().split(' ');
    const inv0 = parseInt(inputs[0]); // tier-0 ingredients in inventory
    const inv1 = parseInt(inputs[1]);
    const inv2 = parseInt(inputs[2]);
    const inv3 = parseInt(inputs[3]);
    const score = parseInt(inputs[4]); // amount of rupees
  }

  // Write an action using console.log()
  // To debug: debug('Debug messages...');


  // in the first league: BREW <id> | WAIT; later: BREW <id> | CAST <id> [<times>] | LEARN <id> | REST | WAIT
  console.log('BREW 0');
}
