import React from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
