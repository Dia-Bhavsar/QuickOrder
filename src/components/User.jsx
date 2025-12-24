const User = (props) => {
  const { name, location, contact } = props;
  return (
    <div>
      <h1>User Details</h1>
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Contact: {contact}</h2>
    </div>
  );
};

export default User;
