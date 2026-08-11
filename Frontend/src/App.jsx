import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import FoodCard from "./components/FoodCard";
import Contact from "./components/Contact";
import About from "./components/About";
import Offer from "./components/Offer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <FoodCard />
      <Offer />
      <About />
      <Contact />
    </>
  );
};

export default App;
