import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import FoodCard from "./components/FoodCard";
import Contact from "./components/Contact";
import About from "./components/About";
import Offer from "./components/Offer";
// import Register from "./pages/Register";
// import Login from "./pages/login";
import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />

              <Menu category={category} setCategory={setCategory} />
              <FoodCard />
              <Offer />
              <About />
              <Contact />
            </>
          }
        />

        <Route path="/auth" element={<Auth />} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default App;
