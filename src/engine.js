import { ACTIONS } from './constants';

const ingredientMultiplayer = [1, 2, 3, 5]; // penalization values because they take longer to generate
const pricePenalization = 1;

const ingredientsValue = (ingredientsArray, mod = 1) => ingredientsArray.reduce((acc, amount, index) => acc + (c * ingredientMultiplayer[index] * mod), 0);

/**
 *
 * @param {Player} player
 * @param {Order[]} orders
 * @return {Order[]}
 */
const calculateOrderValue = (player, orders) => {
  const possibleOrders = Object.values(orders).filter((o) =>
    player.canPrepare(o),
  );
  return possibleOrders.map((order) => {
    const price = order.price;
    const remainderInventory = player.inventory
      .substract(order.ingrCost);
    const costValue =  ingredientsValue(order.ingrCost, -1);
    const inventoryValue = ingredientsValue(remainderInventory);
    return { order, weight: price * pricePenalization + costValue + inventoryValue };
  }).sort((o1, o2) => o1.weight - o2.weight);
};

/**
 *
 * @param {Player[]} players
 * @param {Map<string, Order>} orders
 */
const chooseAction = (players, orders) => {
  const player = players[0];
  const priorityOrder = calculateOrderValue(player, orders);
  return priorityOrder.length > 0 ? priorityOrder[0].prepare() : ACTIONS.WAIT;
};

export default chooseAction;
