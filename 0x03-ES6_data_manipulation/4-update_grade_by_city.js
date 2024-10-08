export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    const myGrade = newGrades.filter((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: myGrade[0] ? myGrade[0].grade : 'N/A',
    };
  });
}
