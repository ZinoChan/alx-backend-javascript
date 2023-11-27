export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator
    .map((el, idx) => (idx !== reportWithIterator.length - 1 ? `${el} |` : el))
    .join(' ');
}
