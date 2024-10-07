export default function getListStudentIds(arr){


	if (!Array.isArray(arr)){
		return [];
	}

	const newArray = arr.map(function(item){

		return item.id;
	});

	return newArray;


};
