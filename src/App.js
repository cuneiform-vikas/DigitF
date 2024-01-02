import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import "./utils/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="background"></div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
