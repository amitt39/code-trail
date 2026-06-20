const students = [
  { name: "Amit", marks: 85, paid: true },
  { name: "Sara", marks: 42, paid: false },
  { name: "Raj", marks: 91, paid: true },
  { name: "Priya", marks: 55, paid: true },
  { name: "Karan", marks: 33, paid: false },
];

// Do these tasks:

// Check if at least one student scored above 90
const student90plus = students.some(student => student.marks > 90);
console.log(student90plus);

// Check if all students have paid
const feesPaid = students.every(student => student.paid);
console.log(feesPaid);

// Check if every student is passing (marks above 40)
const passingStudents = students.every(student => student.marks > 40);
console.log(passingStudents);

// Check if any student has marks below 35
const below35Student = students.some(student => student.marks < 35);
console.log(below35Student);
