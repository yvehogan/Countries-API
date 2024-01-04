// import React, { useState } from 'react'
// import originalData from "../../data/data";

// import Link from "next/link";


// const DisplayCountries = () => {
//     const [filteredData, setFilteredData] = useState(originalData);
  

//   return (
//     <div className="w-full flex justify-between flex-wrap space-x-5">
//           {filteredData?.map((data) => (
//             <div
//               className="bg-white rounded-xl mb-12 w-full md:w-[45%] lg:w-[23%]"
//               key={data?.name}
//             >
//               <div className="">
//               <Link href={`/country/${data?.name}`}>
//                 <img
//                   src={data?.flags?.png}
//                   className="w-full rounded-t-xl h-[200px]"
//                 />
//                 </Link>
//                 <div className="px-8 pb-8 pt-5 text-lg text-primary">
//                   <p className="text-primary font-extrabold pb-4">
//                     {data?.name}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Population: </span>
//                     {data?.population}
//                   </p>
//                   <p className="py-1">
//                     <span className="font-semibold">Region: </span>
//                     {data?.region}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Capital: </span>
//                     {data?.capital}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//   )
// }

// export default DisplayCountries