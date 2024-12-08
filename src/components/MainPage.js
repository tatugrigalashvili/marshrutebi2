import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate();

  const goToProfile = () => {
    if (name && surname) {
      navigate("/profile/" + name + "/" + surname);
    } else {
      alert("გთხოვთ შეავსეთ ორივე გრაფა");
    }
  };
  
  return (
    <div>
      <h1>Main Page</h1>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>

      <input type="text" placeholder="Enter your surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>

      <br/>

      <button onClick={goToProfile}>პროფილზე გადასვლა</button>
    </div>
  );
};

export default MainPage;
