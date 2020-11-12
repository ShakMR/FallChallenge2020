class Player {
  constructor(nIngredients) {
    this.inventory = [];
    this.rupees = 0;

    for (let i = 0; i < nIngredients; i += 1) {
      this.inventory.push(0);
    }
  }

  /**
   *
   * @param {Order} order
   */
  canPrepare(order) {
    // ingrCost are negative numbers
    return this.inventory.add(order.ingrCost).some((amount) => amount >= 0);
  }

  setIngredient(ingrIndex, amount) {
    return (this.inventory[ingrIndex] = amount);
  }

  addIngredient(ingrIndex, amount) {
    return (this.inventory[ingrIndex] += amount);
  }

  useIngredient(ingrIndex, amount) {
    return (this.inventory[ingrIndex] -= amount);
  }

  hasEnoughIngredients(ingrIndex, amount) {
    return this.inventory[ingrIndex] >= amount;
  }

  setRupees(amount) {
    return (this.rupees = amount);
  }

  addRupees(amount) {
    return (this.rupees += amount);
  }
}

export default Player;
