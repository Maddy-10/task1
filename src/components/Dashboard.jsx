import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="absolute w-screen flex justify-end top-20 z-10">
      <div className=" w-3/4 py-3">
        <div className="flex justify-around px-10">
          <h1 className="text-2xl">Dashboard</h1>
          <div className="h-full my-auto flex">
            <input
              placeholder="Search"
              className="bg-gray-200 rounded-xl px-2"
            />
            <FaSearch className="my-auto mx-2" />
          </div>
          <div className="h-full my-auto flex">
            <FaFilter className="my-auto mx-2" />
            <h1 className="my-auto">Filter</h1>
          </div>
          <button className="rounded bg-blue-700 text-white px-2 flex">
            <FaPlus className="my-auto mx-2" />
            <span className="my-auto">Create New Section</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
