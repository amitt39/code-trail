const students = [
  { name: "Amit", marks: 85, grade: "A" },
  { name: "Sara", marks: 42, grade: "C" },
  { name: "Raj", marks: 91, grade: "A" },
  { name: "Priya", marks: 55, grade: "B" },
  { name: "Karan", marks: 33, grade: "C" },
];

// Do these tasks:

// Find the first student with grade "A"
const gradeA_student = students.find(student => student.grade === "A");
console.log(gradeA_student);

// Find the index of the student named "Priya"
const indexOfPriya = students.findIndex(student => student.name === "Priya")
console.log(indexOfPriya);

// Find the first student with marks below 50
const marksBelow50 = students.find(student => student.marks < 50);
console.log(marksBelow50);

// Find the index of the first grade "C" student
const gradeCstudent = students.findIndex(student => student.grade === "C");
console.log(gradeCstudent);
