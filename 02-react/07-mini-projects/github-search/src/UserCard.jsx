function UserCard({ userData }) {
  console.log("usercard", userData);

  return (
    <>
      <img src={userData.avatar_url} width={"70px"} alt="" />
      <h1>{userData.name}</h1>
      <h2>{userData.bio}</h2>
      <p>{userData.followers}</p>
      <p>{userData.following}</p>
      <p>{userData.public_repos}</p>
    </>
  );
}
export default UserCard;
