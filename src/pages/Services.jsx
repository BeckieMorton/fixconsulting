import { useLocation } from "react-router-dom";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Copyright } from "../components/Copyright/Copyright";
import { Cfo } from "../components/Cfo/Cfo";
import { Projectandchange } from "../components/Projectandchange/Projectandchange";
import { Hero } from "../components/Hero/Hero";

export const Services = () => {
  const location = useLocation();
  const { from } = location.state;
  return (
    <div>
      <Header />
      <Hero />
      {from === "Cfo" ? <Cfo /> : <Projectandchange />}
      <Footer />
      <Copyright />
    </div>
  );
};
