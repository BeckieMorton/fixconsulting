import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Copyright } from "../components/Copyright/Copyright";
import { Hero } from "../components/Hero/Hero";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Header />
      <Hero />
      <Footer />
      <Copyright />
    </div>
  );
};
