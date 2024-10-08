export default function getStudentsByLocation(list, location) {
  const newList = list.filter((student) => student.location === location);

  return newList;
}
