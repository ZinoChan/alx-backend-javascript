const cloneSymbol = Symbol('cloneCar');
export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string') this._brand = brand;
    if (typeof motor === 'string') this._motor = motor;
    if (typeof color === 'string') this._color = color;
  }

  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method to clone the car
  cloneCar() {
    return this[cloneSymbol]();
  }
}
