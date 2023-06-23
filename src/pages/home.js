import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="wrapper">
      <Header player={currentPlayer} />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
