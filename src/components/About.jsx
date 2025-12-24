import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      {/* <User name="John Doe" location="New York" contact="123-456-7890" /> */}
      <UserClass
        name="Jane Smith"
        location="Los Angeles"
        contact="987-654-3210"
      />
    </div>
  );
};

export default About;
