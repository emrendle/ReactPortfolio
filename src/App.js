import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
