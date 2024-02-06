import React from "react";
import Navbar from "./components/server/Navbar";
import Hero from "./components/server/Hero";
import Cards from "./components/server/Cards";
import About from "./components/server/About";
import Statistic from "./components/client/Statistic";
import Appointment from "./components/client/Appointment";
import Department from "./components/server/Department";
import Contact from "./components/server/Contact";
import Footer from "./components/server/Footer";
import Doctors from "./components/server/Doctors";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="flex flex-col gap-[120px]">
        <Cards />
        <About />
        <Statistic />
        <Appointment />
        <Department />
        <Doctors />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
