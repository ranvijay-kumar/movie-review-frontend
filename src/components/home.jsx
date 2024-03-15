import React from "react";
import "./home.css";
import Navbar  from "./navbar";
import Footer from "./footer";

function Home() {
  return (
    <div className="home d-flex flex-column justify-content-between">
      <Navbar />
      <div className="px-2 home-body">
        <div>
          <h1>The best movie reviews site!</h1>
          <div><input type="text"></input> <button>Search</button></div>
        </div>
        <div className="">
            {/* it contains movie name */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
