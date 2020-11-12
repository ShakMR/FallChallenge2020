export const prepareMovement = (nPacs) => {
  const movements = [];
  return (id, x, y) => {
    if (movements.length < nPacs) {
      movements.push(`MOVE ${id} ${x} ${y}`);
    }
    if (movements.length === nPacs) {
      console.log(movements.join(' | '));
    }
  }
}

export const debug = (...arg) => {
  console.error(...arg);
}

export default {
  prepareMovement,
  debug,
}
