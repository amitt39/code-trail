
// Do these tasks:
const titleEl = document.querySelector('#title');
const parasEl = document.querySelectorAll(".description");
const btnEl = document.querySelector("#btn");
const listContainerEl = document.querySelectorAll('#list');
const ulEl = document.querySelectorAll('#list li');
const inputEl = document.querySelector("input");
const firstDescPara = document.querySelector(".description");
const bodyEl = document.querySelector("body")

// Select the h1 by id and change its text to "DOM Practice"

titleEl.textContent = "DOM Practice"

// Select all .description paragraphs and change both their text to "Updated paragraph"
parasEl.forEach(para => {
  para.textContent = "Updated Paragraph"
})

// Select the button by id and change its text to "Click Me!"
btnEl.textContent = "Click Me!"

// Select the ul by id and change the second li text to "Updated Item"
ulEl[1].textContent = "Updated Item"

// Select the input and change its placeholder to "Enter your name..."
inputEl.placeholder = "Enter you name..."

// Add the highlight class to the h1
titleEl.classList.add("highlight");

// Toggle the hidden class on the first .description paragraph — run it twice and see what happens
firstDescPara.classList.toggle("hidden")
firstDescPara.classList.toggle("hidden")

// Change the button's type attribute to "submit"
btnEl.setAttribute("type", "submit")

// Add a data-level attribute to the h1 with value "beginner"
titleEl.setAttribute("data-level", "beginner");

// Read that data-level back using both getAttribute and dataset and print both to console
const dataLevelUsingGetAttr = titleEl.getAttribute("data-level")
console.log(dataLevelUsingGetAttr);

const dataLevelUsingDataset = titleEl.dataset.level;
console.log(dataLevelUsingDataset);

// Add a click event to the button — every click changes the h1 text to "Button Clicked!" and toggles the highlight class on it
btnEl.addEventListener('click', function () {
  titleEl.textContent = "Button Clicked!"
  titleEl.classList.toggle('highlight')
})

// Add an input event to the text input — every time the user types, print what they typed to the console
inputEl.addEventListener('input', function (e) {
  console.log(e.target.value); // is there any other way?, I just look out for the suggestions in and dig little bit for this e.data it works but it shows single character only not the whole input text

  // NOTE: I found it later how to get whole text from the input while doing the keydown task its,console.log(inputEl.values);
})

// Add a keydown event to the input — when the user presses Enter, print "Submitted: " followed by the input value
inputEl.addEventListener("keydown", function (e) {
  if (e.key == 'Enter') {
    const inputPara = inputEl.value
    console.log(inputPara);
    console.log("Submitted");

  }
})

// Add a click event to each li item — when clicked, print "You clicked: Item 1" (or whichever item was clicked) using event.target.textContent

ulEl.forEach(list => list.addEventListener('click', function (e) {
  const itemClickMsg = `You clicked: ${e.target.textContent}`
  bodyEl.append(itemClickMsg)
}))
