export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  if (!Array.isArray(getListStudents) || !Array.isArray(newGrades)) return [];
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade:
        newGrades.find((grade) => grade.studentId === student.id).grade || 'N/A',
    }));
}
