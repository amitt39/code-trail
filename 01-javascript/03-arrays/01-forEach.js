// Use this array:
const students = [
  { name: "Amit", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Raj", marks: 91 },
  { name: "Priya", marks: 55 },
  { name: "Karan", marks: 33 },
];

// Do these three tasks using forEach:

// Print each student's name and marks like "Amit: 85"
students.forEach(student => console.log(`${student.name}: ${student.marks}`));

// Print only students who are passing (marks above 40)
students.forEach(student => {
  if (student.marks > 40) {
    console.log(student);
  }
})

// Print each student with their rank — "Rank 1: Amit - 85 marks"  (rank is just their position in the array, starting from 1)
students.forEach((student, index) => {
  console.log(`Rank ${index + 1}: ${student.name} - ${student.marks}`);
})
