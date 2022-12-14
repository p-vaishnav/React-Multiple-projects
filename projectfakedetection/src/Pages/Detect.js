import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Detect = () => {
  return (
    <div>
      <Header />
      <h1>In Detect Component</h1>
        <div id="text">   
            <textarea  rows="10" cols="50"></textarea>
            <br></br>
            <button className="btn btn-primary">Rectify</button>
        </div>
      <Footer />
    </div>
  );
};

export default Detect;
