import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import "./utils/App.css";
import { About, Contact, Furniture, Home, Shop } from "./modules";

const App = () => {
  return (
    <div className="App">
      <div className="background"></div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/shop" Component={Shop} />
          <Route path="/furniture" Component={Furniture} />
          <Route path="/contact-us" Component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
