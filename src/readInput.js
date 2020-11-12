/*       */

import Player from './Player';
import Order, { ORDER_TYPE } from './Order';

const readOrders = (orders) => {
  const actionCount = parseInt(readline(), 10); // the number of spells and recipes in play
  for (let i = 0; i < actionCount; i += 1) {
    const inputs = readline().split(' ');
    const actionId = inputs[0]; // the unique ID of this spell or recipe

    if (!(actionId in orders)) {
      // we assume that actions are immutable
      const actionType = inputs[1]; // in the first league: BREW; later: CAST, OPPONENT_CAST, LEARN, BREW
      const delta0 = parseInt(inputs[2], 10); // tier-0 ingredient change
      const delta1 = parseInt(inputs[3], 10); // tier-1 ingredient change
      const delta2 = parseInt(inputs[4], 10); // tier-2 ingredient change
      const delta3 = parseInt(inputs[5], 10); // tier-3 ingredient change
      const price = parseInt(inputs[6], 10); // the price in rupees if this is a potion
      /* unused for wood league */
      // const tomeIndex = parseInt(inputs[7], 10); // in the first two leagues: always 0; later: the index in the tome if this is a tome spell, equal to the read-ahead tax
      // const taxCount = parseInt(inputs[8], 10); // in the first two leagues: always 0; later: the amount of taxed tier-0 ingredients you gain from learning this spell
      // const castable = inputs[9] !== '0'; // in the first league: always 0; later: 1 if this is a castable player spell
      // const repeatable = inputs[10] !== '0'; // for the first two leagues: always 0; later: 1 if this is a repeatable player spell

      orders[actionId] = new Order(
        actionId,
        ORDER_TYPE[actionType],
        [delta0, delta1, delta2, delta3],
        price,
      );
    }
  }
};

const readPlayers = (players) => {
  for (let i = 0; i < 2; i += 1) {
    let player = players[i];
    if (!player) {
      player = new Player(4);
      players.push(player);
    }
    const inputs = readline().split(' ');
    for (let j = 0; j < 4; j += 1) {
      const amount = parseInt(inputs[j], 10);
      player.setIngredient(j, amount);
    }
    const score = parseInt(inputs[4], 10); // amount of rupees
    player.setRupees(score);
  }
};

const readInput = (players, orders) => {
  readOrders(orders);
  readPlayers(players);
};

export default readInput;
