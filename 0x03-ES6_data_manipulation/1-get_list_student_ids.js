export default function getListStudentIds(getListStudents) {
  return getListStudents instanceof Array
    ? getListStudents.map((student) => student.id)
    : [];
}
