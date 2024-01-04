import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
import countries from "../../data/data";
import React from "react";
import Header from "@/components/Header";
import Link from "next/link";

const countryDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const country = countries?.filter(function (item) {
    return item?.name === id;
  });

  return (
    <div>
      <Header />
      <div className="px-5 md:px-16 mt-12">
        <Link href="/" className="flex justify-center w-20 rounded-sm py-1 items-center gap-2 border border-gray-300 drop-shadow"><IoIosArrowRoundBack /> Back</Link>
        {country?.map((detail) => (
          <div className="w-full mt-16 md:flex justify-between items-center">
            <img
              src={detail?.flags?.png}
              className="w-full md:w-[45%] rounded-lg"
              alt="country flag"
            />
            <div className="w-full md:w-[45%] mt-10 md:mt-0">
              <div>
                <p className="text-primary dark:text-white font-extrabold pb-4 text-3xl">
                  {detail?.name}
                </p>
                <div className="md:flex justify-between gap-5">
                  <div className="text-lg text-primary dark:text-white">
                    <p className="pb-2 font-light">
                    <span className="font-semibold text-md mr-2">Native Name: </span>
                      {detail?.nativeName}
                    </p>
                    <p className="pb-2 font-light">
                    <span className="font-semibold mr-2">Population: </span>
                      {detail?.population}
                    </p>
                    <p className="pb-2 font-light">
                    <span className="font-semibold mr-2">Region: </span>
                      {detail?.region}
                    </p>
                    <p className="pb-2 font-light">
                    <span className="font-semibold mr-2">Sub Region: </span>
                      {detail?.subregion}
                    </p>
                    <p className="pb-2 font-light">
                    <span className="font-semibold mr-2">Capital: </span>
                      {detail?.capital}
                    </p>
                  </div>
                  <div className="text-lg text-primary dark:text-white mt-6 md:mt-0">
                    <p className="pb-2 font-light">
                    <span className="font-semibold mr-2">Top Level Domain: </span>
                      {detail?.topLevelDomain}
                    </p>
                    <p className="pb-2 font-light">
                    <span className="font-semibold mr-2">Currencies: </span>
                      {detail?.currencies && detail.currencies.length > 0
                        ? detail.currencies[0].name
                        : "N/A"}
                    </p>

                    <p className="pb-2 font-light">
                    <span className="font-semibold mr-2">Languages: </span>
                      {detail?.languages && detail.languages.length > 0
                        ? detail.languages[0].name
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            <div className="my-8">
              <p className="font-semibold mr-2 mb-3">Border countries:</p>
              <ul className="flex flex-wrap gap-3 items-center">
                {detail?.borders?.map((borderCode, index) => (
                    <div className="">
                    <li key={index} className="py-1 px-6 md:my-0 border border-gray-300 rounded-md drop-shadow-md">{borderCode}</li>
                    </div>
                    ))}
              </ul>
                    </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default countryDetails;
