const classes = [
  { teacher: "Mr. Sharma", students: ["Amit", "Sara", "Raj"] },
  { teacher: "Ms. Patel", students: ["Priya", "Karan", "Neha"] },
  { teacher: "Mr. Verma", students: ["Ravi", "Pooja"] },
];

const nested = [1, [2, 3], [4, [5, 6]], [7, [8, [9]]]];

// Flatten nested one level deep
const oneLevelDeep = nested.flat();
console.log(oneLevelDeep);

// Flatten nested completely
const completelyFlatten = nested.flat(Infinity);
console.log(completelyFlatten);

// Get a single flat array of all student names from classes using flatMap
const flatNames = classes.flatMap(classStudent => classStudent.students)
console.log(flatNames);
