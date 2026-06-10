function getUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (id <= 0) {
        reject("Invalid user id");
        return;
      }
      resolve({ id: id, name: "Amit", age: 22 });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (!userId) {
        reject("No user id provided");
        return;
      }
      resolve([
        { id: 1, title: "First Post", userId: userId },
        { id: 2, title: "Second Post", userId: userId },
      ]);
    }, 1000);
  });
}

// Now do these tasks using async/await:

async function fetchUser() {
  try {

    // Fetch the user with id 1 and print their name
    const user = await getUser(1)
    console.log(`Name: ${user.name}`);
    // Fetch the user then fetch their posts and print all post titles
    const posts = await getPosts(user.id)
    posts.forEach(post => {
      console.log(post.title);
    });
    // Try fetching a user with id - 1 and handle the error
    const user2 = await getUser(-1);
    console.log(user2.name);
  } catch (error) {
    console.log("Error: ", error);
  }

}

fetchUser()
