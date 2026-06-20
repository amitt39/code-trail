const student = {
  name: "Amit",
  age: 22,
  marks: 85,
  city: "Ahmedabad",
  country: "India"
};

const scores = [91, 85, 78, 92, 65];

// Do these tasks:

// Destructure name, age, city from the student object
// const { name, age, city } = student;
// console.log(name);
// console.log(age);
// console.log(city);

// Destructure only the first and third score from the scores array
const [first, , third] = scores;
console.log(first);
console.log(third);

// Destructure name and age from student, collect remaining properties using rest
const { name, age, ...otherInfo } = student
// console.log(name);
// console.log(age);
console.log(otherInfo);


// Create a new object that combines student with this object using spread:
const extra = { grade: "A", passed: true };
const studentGradeInfo = { ...student, ...extra }
console.log(studentGradeInfo);


// Write a function that accepts any number of scores and returns their average using rest
function average(...scores) {
  let total = 0;
  scores.forEach(score => {
    total += score;
  });
  let average = total / scores.length
  return average
}

console.log(average(46, 59, 20))
console.log(average(46, 59))
console.log(average(46))
