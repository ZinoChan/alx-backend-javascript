export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => ({ ...student, grade: newGrades[student.id] || 'N/A' }));
}
