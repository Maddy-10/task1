import React from "react";
// import { FaCircleUser} from ''
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="absolute w-screen flex justify-end top-0 z-10">
      <div className="border  w-3/4 py-3">
        <div className="flex justify-between text-3xl px-10">
          <h1>LOGO</h1>
          <ul className="flex text-xl text-blue-700">
            <li className="my-auto px-2">Home</li>
            <li className="my-auto px-2">Dashboard</li>
            <li className="my-auto">
              <button className="my-auto mx-2">Logout</button>
            </li>
            <li className="my-auto px-2 text-black">
              <FaUserCircle size={24} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
