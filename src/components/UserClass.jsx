import React, { use } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "",
        location: "",
        contact: "",
      },
    };
  }
  async componentDidMount() {
    console.log("UserClass component has mounted.");

    const data = await fetch("https://api.github.com/users/dia-bhavsar");
    const json = await data.json();

    this.setState({ userData: json });
    console.log(json);
  }
  render() {
    const { name, location, contact, avatar_url } = this.state.userData;
    return (
      <div className="user-data">
        <h2>User Details</h2>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
        <img src={avatar_url} alt="User Avatar" width="100" />
      </div>
    );
  }
}

export default UserClass;
