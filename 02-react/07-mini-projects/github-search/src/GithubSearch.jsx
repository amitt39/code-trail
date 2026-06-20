import { useState } from "react";
import "./App.css";
import "./index.css";
import useGithubUser from "./useGithubUser";
import UserCard from "./UserCard";

function GithubSearch() {
  const [username, setUsername] = useState("");
  const userData = useGithubUser();
  console.log(userData.user);

  return (
    <>
      <input
        value={username}
        type="text"
        name=""
        id=""
        placeholder="Enter username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button
        disabled={userData.loading}
        onClick={() => {
          userData.fetchUser(username);
        }}
      >
        {userData.loading ? "Searching" : "Search"}
      </button>
      {userData.error && <p>{userData.error.message}</p>}
      {userData.user && <UserCard userData={userData.user} />}
    </>
  );
}
export default GithubSearch;
