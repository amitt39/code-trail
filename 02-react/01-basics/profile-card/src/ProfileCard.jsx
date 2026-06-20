function ProfileCard({ name, city, role }) {
  return (
    <>
      <h1>I am {name}</h1>
      <p>I am from {city}</p>
      <p>My role is {role}</p>
    </>
  );
}
export default ProfileCard;
