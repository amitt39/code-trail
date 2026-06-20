// Todo List


const inputEl = document.querySelector("#input");
const btnEl = document.querySelector("#btn");
const listContainerEl = document.querySelector("#list")
const listItem = document.querySelectorAll("#list li")


// When the button is clicked — take the text from the input, create a new li with that text, add it to the #list, then clear the input
// Each new li should have a data-id attribute with a unique number (use a counter variable)
let id = 101
function addItem(e) {
  const todoText = inputEl.value;
  const list = document.createElement('li');
  if (todoText === "") {
    inputEl.placeholder = "Please type something first..."
    return
  }
  list.setAttribute("data-id", id)
  id++
  listContainerEl.append(list)
  list.textContent = todoText
  inputEl.value = ""
}

// When any li is clicked — remove it from the list
// If the input is empty when button is clicked — don't add anything, instead change the input placeholder to "Please type something first!"


btnEl.addEventListener('click', addItem)
listContainerEl.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.remove()
  }
}
)
