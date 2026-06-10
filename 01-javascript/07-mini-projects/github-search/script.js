// Now build script.js. Here's what it should do:

// On button click — get the value from #input - DONE
// If empty — show "Please enter a username" inside #result-box - DONE
// Fetch from https://api.github.com/users/USERNAME
// If user not found (response.ok is false) — show "User not found" in #result-box
// If found — build and display this inside #result-box:

// Avatar image
// Name
// Bio
// Followers, following, public repos



// For displaying results — use innerHTML to inject HTML into #result-box


const inputEl = document.querySelector("#input");
const btnEl = document.querySelector("#btn")
const resultBoxEl = document.querySelector("#result-box")


function getInputValue() {
  let username = inputEl.value;
  if (username === "") {
    inputEl.classList.add("error")
    resultBoxEl.textContent = "Please enter a username"
    return false;
  }
  console.log(username);

  inputEl.classList.remove("error");
  resultBoxEl.textContent = ""
  return true
}

async function fetchUser() {
  btnEl.textContent = "Fetching..."
  btnEl.disabled = true;
  const username = inputEl.value;

  try {

    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) {
      resultBoxEl.textContent = "User not found"
      return
    }

    const data = await response.json();
    console.log(data);
    // avatar_url, name, bio, followers, public_repos
    resultBoxEl.innerHTML = `
    <img src=${data.avatar_url}/>
    <p>Name: ${data.name}</p>
    <p>Bio: ${data.bio || "No bio available"}</p>
    <p>Followers: ${data.followers}</p>
    <p>Following: ${data.following}</p>
    <p>Public Repositeries: ${data.public_repos}</p>
    `
  } catch (error) {
    resultBoxEl.textContent = "Failed to fetch the user, Please try again!"
  }
  finally {
    btnEl.textContent = "Search"
    btnEl.disabled = false;
  }
}

btnEl.addEventListener('click', async () => {
  if (!getInputValue()) {
    return
  }
  await fetchUser();
});
