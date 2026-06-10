import { useState } from "react";

function useGithubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchUser = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUser(data)
    } catch (error) {
      setError(error)
      setUser(null)
    } finally {
      setLoading(false);
    }

  }
  return { user, fetchUser, error, loading }
}

export default useGithubUser;
