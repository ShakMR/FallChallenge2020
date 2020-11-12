export const ORDER_TYPE = {
  BREW: 'BREW',
};

class Order {
  constructor(id, type, ing, price) {
    this.id = id;
    this.type = type;
    this.ingrCost = ing;
    this.price = price;
  }

  prepare() {
    return `${this.type} ${this.id}`;
  }
}

export default Order;
