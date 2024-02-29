import React from "react";
import Drawer from "../Drawer";
import Navbar from "../Navbar";
import Dashboard from "../Dashboard";
import Table from "../Table";

const Home = () => {
  return (
    <div>
      <Drawer />
      <Navbar />
      <Dashboard />
      <Table />
    </div>
  );
};

export default Home;
