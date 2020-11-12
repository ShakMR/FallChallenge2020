class Player {
  constructor(nIngredients) {
    this.inventory = [];
    this.rupees = 0;

    for (let i = 0; i < nIngredients; i += 1) {
      this.inventory.push(0);
    }
  }

  setIngredient = (ingrIndex, amount) => (this.inventory[ingrIndex] = amount);

  addIngredient = (ingrIndex, amount) => (this.inventory[ingrIndex] += amount);

  useIngredient = (ingrIndex, amount) => (this.inventory[ingrIndex] -= amount);

  hasEnoughIngredients = (ingrIndex, amount) =>
    this.inventory[ingrIndex] >= amount;

  setRupees = (amount) => (this.rupees = amount);

  addRupees = (amount) => (this.rupees += amount);
}

export default Player;
