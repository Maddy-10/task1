import React from "react";

function Drawer() {
  return (
    <div className="h-screen border w-1/4 relative">
      <div className="flex justify-center w-full border-b py-3">
        <h1 className="text-3xl">Logo</h1>
      </div>
      <div className="w-3/4 ml-auto">
        <ul>
          <li className="mb-2 mt-5">Dashboard</li>
          <li className="my-2">All Sessions</li>
          <li className="my-2">Facilities</li>
          <li className="my-2">Courses</li>
          <li className="my-2">Languages</li>
          <li className="my-2">Teams</li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
