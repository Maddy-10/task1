// import React from "react";
// import { table_data } from "../data/data";

// const Table = () => {
//   return (
//     <div className="absolute w-screen flex justify-end top-40 z-10">
//       <table class="w-3/4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" class="px-6 py-3">
//               S.no
//             </th>
//             <th scope="col" class="px-6 py-3">
//               College Name
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Session Date
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Session Planned
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Language
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Sebi Speaker
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Souced by
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Session Status
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Coordinator
//             </th>
//             <th scope="col" class="px-6 py-3">  </th>
//           </tr>
//         </thead>
//         <tbody>
//           {table_data.map((datas,index)=>(
//             <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//             <th
//               scope="row"
//               class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//             >
//               {datas.sno}
//             </th>
//             <td class="px-6 py-4">{datas.clg_name}</td>
//             <td class="px-6 py-4">{datas.clg_name}</td>
//             <td class="px-6 py-4">11 am - 1pm</td>
//             <td class="px-6 py-4">English</td>
//             <td class="px-6 py-4">-</td>
//             <td class="px-6 py-4">NSDL</td>
//             <td class="px-6 py-4">
//               <a
//                 href="#"
//                 class="font-medium text-green-600 hover:underline"
//               >
//                 open
//               </a>
//             </td>
//             <td class="px-6 py-4">Name A</td>
//             <td class="px-6 py-4">
//               <a
//                 href="#"
//                 class="font-medium text-green-600 hover:underline"
//               >
//             Cancel
//               </a>
//             </td>
//           </tr>
//           ))}
//           {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//             <th
//               scope="row"
//               class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//             >
//               1
//             </th>
//             <td class="px-6 py-4">ABC college Of Engineering</td>
//             <td class="px-6 py-4">15.01.24</td>
//             <td class="px-6 py-4">11 am - 1pm</td>
//             <td class="px-6 py-4">English</td>
//             <td class="px-6 py-4">-</td>
//             <td class="px-6 py-4">NSDL</td>
//             <td class="px-6 py-4">
//               <a
//                 href="#"
//                 class="font-medium text-green-600 hover:underline"
//               >
//                 open
//               </a>
//             </td>
//             <td class="px-6 py-4">Name A</td>
//             <td class="px-6 py-4">
//               <a
//                 href="#"
//                 class="font-medium text-green-600 hover:underline"
//               >
//             Cancel
//               </a>
//             </td>
//           </tr>
//           <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//             <th
//               scope="row"
//               class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//             >
//               1
//             </th>
//             <td class="px-6 py-4">ABC college Of Engineering</td>
//             <td class="px-6 py-4">15.01.24</td>
//             <td class="px-6 py-4">11 am - 1pm</td>
//             <td class="px-6 py-4">English</td>
//             <td class="px-6 py-4">-</td>
//             <td class="px-6 py-4">NSDL</td>
//             <td class="px-6 py-4">
//               <a
//                 href="#"
//                 class="font-medium text-green-600 hover:underline"
//               >
//                 open
//               </a>
//             </td>
//             <td class="px-6 py-4">Name A</td>
//             <td class="px-6 py-4">
//               <a
//                 href="#"
//                 class="font-medium text-green-600 hover:underline"
//               >
//             Cancel
//               </a>
//             </td>
//           </tr> */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import React from "react";

const Table = () => {
  const table_data = [
    {
      sno: 1,
      clg_name: "ABC college Of Engineering",
      ses_date: "15.01.24",
      ses_plan: "11 am - 1pm",
      language: "English",
      sebi_speaker: "-",
      scored_by: "NSDL",
      ses_status: "Open",
      coordinator: "Name A",
    },
    {
      sno: 2,
      clg_name: "ABC college Of Engineering",
      ses_date: "15.01.24",
      ses_plan: "11 am - 1pm",
      language: "English",
      sebi_speaker: "-",
      scored_by: "NSDL",
      ses_status: "Open",
      coordinator: "Name A",
    },
    {
      sno: 3,
      clg_name: "ABC college Of Engineering",
      ses_date: "15.01.24",
      ses_plan: "11 am - 1pm",
      language: "English",
      sebi_speaker: "-",
      scored_by: "NSDL",
      ses_status: "Open",
      coordinator: "Name A",
    },
    {
      sno: 4,
      clg_name: "ABC college Of Engineering",
      ses_date: "15.01.24",
      ses_plan: "11 am - 1pm",
      language: "English",
      sebi_speaker: "-",
      scored_by: "NSDL",
      ses_status: "Open",
      coordinator: "Name A",
    },
  ];

  return (
    <div className="absolute w-screen flex justify-end top-40 z-10">
      <table className="w-3/4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.no
            </th>
            <th scope="col" className="px-6 py-3">
              College Name
            </th>
            <th scope="col" className="px-6 py-3">
              Session Date
            </th>
            <th scope="col" className="px-6 py-3">
              Session Planned
            </th>
            <th scope="col" className="px-6 py-3">
              Language
            </th>
            <th scope="col" className="px-6 py-3">
              Sebi Speaker
            </th>
            <th scope="col" className="px-6 py-3">
              Scored By
            </th>
            <th scope="col" className="px-6 py-3">
              Session Status
            </th>
            <th scope="col" className="px-6 py-3">
              Coordinator
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {table_data.map((data, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "even:bg-gray-50 even:dark:bg-gray-800"
                  : "odd:bg-white odd:dark:bg-gray-900 border-b dark:border-gray-700"
              }
            >
              <td className="px-6 py-4 font-medium text-gray-900">
                {data.sno}
              </td>
              <td className="px-6 py-4">{data.clg_name}</td>
              <td className="px-6 py-4">{data.ses_date}</td>
              <td className="px-6 py-4">{data.ses_plan}</td>
              <td className="px-6 py-4">{data.language}</td>
              <td className="px-6 py-4">{data.sebi_speaker}</td>
              <td className="px-6 py-4">{data.scored_by}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium bg-green-600 text-black p-1 rounded hover:underline"
                >
                  {data.ses_status}
                </a>
              </td>
              <td className="px-6 py-4">{data.coordinator}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium border border-blue-800 text-blue-800 p-1 rounded hover:underline"
                >
                  Cancel
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
