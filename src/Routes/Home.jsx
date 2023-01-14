import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";
import { items } from "../resorces/index";

const Home = ({ setPlace }) => {
  return (
    <div>
      <Navbar />
      <Slidebar />
      <h1 className="text-2xl font-semibold  my-3">Beaches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 sm:px-0">
        {items.map((item) => {
          return (
            <>
              <Link
                onClick={() => {
                  setPlace(item.id);
                }}
                to={`/${item.title}`}
              >
                <Card key={item.id} item={item} />
              </Link>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
