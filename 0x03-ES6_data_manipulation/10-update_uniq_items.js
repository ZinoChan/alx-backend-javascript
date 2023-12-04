export default function updateUniqueItems(map) {
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      try {
        map.set(key, 100);
      } catch (error) {
        throw new Error('Cannot process ');
      }
    }
  }
  return map;
}
