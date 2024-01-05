import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import originalData from "../data/data";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [filteredData, setFilteredData] = useState(originalData);
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearch = (query: any) => {
    const filteredResults = originalData.filter((data) =>
      data.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleRegionChange = (e: any) => {
    const selectedRegion = e.target.value;
    setSelectedRegion(selectedRegion);

    const filteredResults = originalData.filter((data) =>
      selectedRegion === "" ? true : data.region === selectedRegion
    );
    setFilteredData(filteredResults);
  };

  return (
    <>
      <Header />
      <main className="w-full mt-5 md:mt-10 px-5 md:px-16 bg-veryLightGray dark:bg-very-dark">
        <div className=" py-12 flex flex-wrap md:justify-between items-center">
          <SearchBar onSearch={handleSearch} />
          <div className="bg-white dark:bg-default w-full md:w-auto px-8 py-2 rounded-md text-light text-center md:mt-0">
            <select
              className="outline-none cursor-pointer p-2 text-lg text-primary dark:text-white dark:bg-default"
              name="Filter by region"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="">Filter by region</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className="w-full flex justify-between flex-wrap space-x-5">
        {filteredData?.map((data) => (
            <div
              className="bg-white dark:bg-default rounded-xl mb-12 w-full md:w-[45%] lg:w-[23%]"
              key={data?.name}
            >
              <div className="">
               <Link href={`/country/${data?.name}`}>
                <img
                  src={data?.flags?.png}
                  className="w-full rounded-t-xl h-[200px]"
                  />
                </Link>
                <div className="px-8 pb-8 pt-5 text-xl text-primary dark:text-white">
                  <p className="text-primary dark:text-white font-extrabold pb-4">{data?.name}</p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    {data?.population}
                  </p>
                  <p className="py-1">
                    <span className="font-semibold">Region: </span>
                    {data?.region}
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    {data?.capital}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
