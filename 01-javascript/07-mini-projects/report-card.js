const students = [
  { name: "Amit", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Raj", marks: 91 },
  { name: "Priya", marks: 55 },
  { name: "Karan", marks: 33 },
];

// Build this using map, filter, reduce and closures:

// Add a grade to each student — A (75+), B (55+), C (below 55)
const studentsWithGrade = students.map((student) => {
  if (student.marks > 75) {
    return { name: student.name, marks: student.marks, grade: "A" }
  }
  else if (student.marks > 55) {
    return { name: student.name, marks: student.marks, grade: "B" }
  }
  else {
    return { name: student.name, marks: student.marks, grade: "C" }
  }
})

console.log(studentsWithGrade);

// Get only passing students (marks above 40)
// --- below solution is not valid, casue here I have used the map() - What map does? -- It returns the transformed array of same length, Cant filter out the elements thats in output we got undefined as well cause it ran for every elemetnt of the array and the last student has marks below 40 so cond. get false and it retured the undefined

// const passingStudent = students.map(student => {
//   if (student.marks > 40) {
//     return student;
//   }
// })
// console.log(passingStudent);

// -- valid mathod is filter - It will filter the studnents below 40 marks

const passingStudent = students.filter(student => {
  if (student.marks > 40) {
    return true;
  }
})
console.log(passingStudent);


// Get the class average
const classTotal = students.map(student => student.marks).reduce((acc, curr) => acc + curr, 0)
const classAverage = classTotal / students.length

console.log(classAverage);

// Get the topper — student with highest marks
const topper = students.reduce((acc, curr) => {

  if (acc.marks < curr.marks) {
    return curr
  }
  return acc

}, students[0])

console.log(topper);
