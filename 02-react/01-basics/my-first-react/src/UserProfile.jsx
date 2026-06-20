import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Amit",
    city: "Ahmedabad",
    role: "SDE-1",
  });
  return (
    <>
      <h3>{user.name}</h3>
      <h3>{user.city}</h3>
      <h3>{user.role}</h3>

      <button
        onClick={() => {
          setUser((prev) => {
            return { ...prev, city: "Mumbai" };
          });
        }}
      >
        Change City
      </button>
    </>
  );
}

export default UserProfile;
