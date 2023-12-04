export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((acc, curr) => acc + curr.id, 0);
}
