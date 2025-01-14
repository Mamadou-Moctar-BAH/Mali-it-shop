// Library
import React from "react";

// Components
import Header from "../../Components/Header";
import logoImage from "../../Components/Assets/Images/Logo.png";
import About from "../../Components/About";
import Services from "../../Components/Services";
import Traning from "../../Components/Training";
import Products from "../../Components/Products";
import Footer from "../../Components/Footer";

// Css external
import "./App.css";

//function
const App = () => {
  return (
    <div>
      <Header myLogo={logoImage} />
      <About />
      <Products />
      <Services />
      <Traning />
      <Footer />
    </div>
  );
};

export default App;
