export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') this._size = size;
    if (typeof location === 'string') this._location = location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
