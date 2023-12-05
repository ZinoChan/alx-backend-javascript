export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  if (!Array.isArray(getListStudents) || !Array.isArray(newGrades)) return [];
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      if (matchingGrade) {
        return {
          ...student,
          grade:
            matchingGrade.grade !== undefined ? matchingGrade.grade : 'N/A',
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
}
