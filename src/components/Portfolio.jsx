import React from "react";
import { IoIosGlobe } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
import { portfolios } from "../utils";

export const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-cyan-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here!</p>
        </div>

        <div
          key=""
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-cyan-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="py-2 flex justify-around">
                <a
                  href={demo}
                  className="text-white w-[48%] text-sm inline-flex items-center text-center bg-slate-700 rounded-lg p-2 hover:scale-105 duration-500 hover:bg-sky-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoIosGlobe className="pr-1" size="20px" />
                  Project Online
                </a>
                <a
                  href={code}
                  className="text-white w-[48%] text-sm inline-flex items-center text-center bg-slate-700 rounded-lg p-2 hover:scale-105 duration-500 hover:bg-sky-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="pr-1" size="20px" />
                  Code Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
