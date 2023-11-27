export default function appendToEachArrayValue(array, appendString) {
  const ans = [];
  for (const value of array) {
    ans.push(appendString + value);
  }

  return ans;
}
