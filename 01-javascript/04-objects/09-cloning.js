const student = {
  name: "Amit",
  marks: 85,
  address: {
    city: "Ahmedabad",
    country: "India"
  }
};

// Create a reference copy using =, change the name, prove the original changed
console.log("---Reference Copy---");

const referenceCopy = student;
referenceCopy.name = "abc";
console.log(student.name);

// Create a shallow copy using spread, change the name, prove the original is safe
console.log("---Shallow Copy---");

const shallowCopy = { ...student };
shallowCopy.name = "ABC";
console.log(student.name);


// Create a shallow copy using spread, change address.city, prove the original's nested object still changed
console.log("---Shallow Copy One Level Deep---");
const shallowCopyOneLevelDeep = { ...student };
shallowCopyOneLevelDeep.address.city = "Mumbai";
console.log(student.address.city);


// Create a deep copy using JSON trick, change address.city, prove the original is now fully safe
console.log("---Deep Copy---");
const deepCopy = JSON.parse(JSON.stringify(student));
deepCopy.address.city = "Mumbai";
console.log(student.address.city);
