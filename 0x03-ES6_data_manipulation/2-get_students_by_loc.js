export default function getStudentsByLocation(list, location){

	const newList =  list.filter(function(student){
		return student.location == location;
	});

	return newList;

};
