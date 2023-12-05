export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) return '';
  return Array.from(set)
    .filter((value) => (value ? value.startsWith(startString) : ''))
    .map((value) => (value ? value.slice(startString.length) : ''))
    .join('-');
}
