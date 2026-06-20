// Build a factory function called createStudent that takes name, marks and returns an object with:
// name and marks as properties
// A getGrade method that returns "A" (75+), "B" (55+), "C" (below 55)
// A introduce method that prints "I am Amit, I scored 85 and my grade is A"
function createStudent(name, marks) {
  return {
    name,
    marks,
    getGrade: function () {
      if (this.marks > 75) {
        return "A"
      } else if (this.marks > 55) {
        return "B"
      }
      else {
        return "C"
      }
    },
    introduce: function () {
      console.log(`I am ${this.name}, I scored ${this.marks} and my grade is ${this.getGrade()}`);
      return this
    }
  }
}

// Create three students and call both methods on each.
createStudent("Amit", 90).introduce();
createStudent("abc", 69).introduce();
createStudent("xyz", 34).introduce();
