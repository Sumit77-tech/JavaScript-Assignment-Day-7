function processStudents(students) {
    let filteredStudents = students.filter(student => student.marks > 60);
    let sortedStudents = filteredStudents.sort((a,b) => b.marks - a.marks);
    let sortedNames = sortedStudents.map(student => student.name);
    return sortedNames;
}
const students = [
    { name: "Alice", marks: 85},
    { name: "Bob", marks: 55},
    { name: "Charlie", marks: 72},
    { name: "David", marks: 60},
    { name: "Eve", marks: 90}
];
console.log(processStudents(students));