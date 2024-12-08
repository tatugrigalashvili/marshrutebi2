import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Profile from "./components/Profile";

const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/profile/:name/:surname" element={<Profile></Profile>} />
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
