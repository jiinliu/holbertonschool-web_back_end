export default function getStudentsByLocation(list, location) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.filter((student) => student.location === location);
}
