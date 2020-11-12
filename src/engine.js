import { ACTIONS } from './constants';

const ingredientMultiplayer = [1, 2, 3, 5]; // penalization values because they take longer to generate
const pricePenalization = 10;

const ingredientsValue = (ingredientsArray, mod = 1) =>
  ingredientsArray.reduce(
    (acc, amount, index) => acc + amount * ingredientMultiplayer[index] * mod,
    0,
  );

/**
 *
 * @param {Player} player
 * @param {Order[]} orders
 * @return {Order[]}
 */
const calculateOrderValue = (player, orders) => {
  return Object.values(orders)
    .map((order) => {
      const price = order.price;
      const remainderInventory = player.inventory.add(order.ingrCost);
      const costValue = ingredientsValue(order.ingrCost);
      const inventoryValue = ingredientsValue(remainderInventory);
      return {
        order,
        weight: price * pricePenalization + costValue + inventoryValue,
      };
    })
    .sort((o1, o2) => o2.weight - o1.weight);
};

/**
 *
 * @param {Player[]} players
 * @param {Map<string, Order>} orders
 */
const chooseAction = (players, orders) => {
  const player = players[0];
  const priorityOrder = calculateOrderValue(player, orders);
  debug(priorityOrder);
  if (priorityOrder.length > 0) {
    const order = priorityOrder[0].order;
    delete orders[order.id];
    return order.prepare();
  } else {
    return ACTIONS.WAIT;
  }
};

export default chooseAction;
