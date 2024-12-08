import React from "react";
import { useParams, Link } from "react-router-dom";

const Profile = () => {
  const { name, surname } = useParams();

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <Link to="/" >მთავარ გვერდზე დაბრუნება</Link>
    </div>
  );
};

export default Profile;
