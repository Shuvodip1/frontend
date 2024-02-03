import React from "react";
// import Services from "./components/server/Services";
import Navbar from "./components/server/Navbar";
import Hero from "./components/server/Hero";
import Cards from "./components/server/Cards";
import About from "./components/server/About";
import Statistic from "./components/client/Statistic";
import Appointment from "./components/server/Appointment";
import Department from "./components/server/Department";
import FAQ from "./components/server/FAQ";
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
        {/* <Services /> */}
        <Appointment />
        <Department />
        <Doctors />
        {/* <FAQ /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
