export default function updateStudentGradeByCity(students, city, newGrades){

	const filtered_students = students.filter(function(student){
		return student.location == city; 
	});

	return filtered_students.map(function(student){
		{
			const myGrade = newGrades.filter(function(grade){
				return grade.studentId == student.id;
			});

			return {
				...student,
				grade: myGrade[0]? myGrade[0].grade : 'N/A'
			}

		}
	})
  };
