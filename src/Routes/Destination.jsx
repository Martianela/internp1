import React from "react";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { items } from "../resorces";

const Destination = ({ place }) => {
  const destination = items.filter((item) => {
    return place === item.id;
  });
  console.log(destination);
  return (
    <div>
      <Navbar />
      <Feed data={destination[0]} />
      <Footer />
    </div>
  );
};

export default Destination;
