export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const newArray = arr.map((item) => item.id);

  return newArray;
}
