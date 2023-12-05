export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) throw new RangeError('Position outside range');
  const buffer = new ArrayBuffer(length);
  const int8Arr = new Int8Array(buffer);
  int8Arr.set([value], position);
  return new DataView(buffer);
}
