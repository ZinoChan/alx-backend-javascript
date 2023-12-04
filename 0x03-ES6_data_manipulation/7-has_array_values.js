export default function hasValuesFromArray(set, array) {
  return array.reduce((acc, curr) => (acc && set.has(curr)), true);
}
