// Use https://jsonplaceholder.typicode.com as your API.
// Do these tasks:

// Fetch user with id 1 and print their name, email, and city (city is inside address)
async function fetchData() {
  try {

    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
      throw new Error("Request Failed: " + response.status);
    }
    const data = await response.json();
    console.log(data.name);
    console.log(data.email);
    console.log(data.address.city);
  } catch (error) {
    console.log("Error: ", error);
  }
}
// Fetch all posts by user id 1 — URL is /posts?userId=1 — print the title of each post
async function fetchPosts() {
  try {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    if (!response.ok) {
      throw new Error("Request Faild: " + response.status);
    }
    const data = await response.json();
    data.forEach(post => {
      console.log(post.title);
    });
  } catch (error) {
    console.log("Error ", error);

  }

}
// Fetch a post that doesn't exist — URL is /posts/999 — handle the error properly using response.ok
async function fetchPostsNotExist() {
  try {


    const response = await fetch("https://jsonplaceholder.typicode.com/posts/999")
    if (!response.ok) {
      throw new Error("Request Faild: " + response.status);
    }
    const data = await response.json();
    console.log(data);


  } catch (error) {
    console.log("Error ", error);

  }
}
fetchData()
fetchPosts()
fetchPostsNotExist()
