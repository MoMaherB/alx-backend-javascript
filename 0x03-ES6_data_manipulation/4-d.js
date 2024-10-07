const students = [
	{ id: 1, firstName: 'Guillaume', location: 'San Francisco' },
	{ id: 2, firstName: 'James', location: 'Columbia' },
	{ id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];


  newGrades = [{ studentId: 5, grade: 97 }];

  city = 'San Francisco';


  function updateStudentGradeByCity(students, city, newGrades){

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


  console.log(updateStudentGradeByCity(students, city, newGrades));