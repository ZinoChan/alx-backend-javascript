export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    if (typeof sqft === 'number') this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
