// eslint-disable-next-line import/prefer-default-export
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) && weakMap.get(endpoint) + 1 >= 5) {
    throw new Error('Endpoint load is high.');
  }
  weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);
}
