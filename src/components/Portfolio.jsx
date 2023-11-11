import React from "react";
import AmazonClone from "../assets/portfolio/AmazonClone.png";
import NetflixClone from "../assets/portfolio/NetflixClone.png";
import DrumKit from "../assets/portfolio/DrumKit.png";
import textutils from "../assets/portfolio/textUtils.png";
import TodosList from "../assets/portfolio/TodosList.png";
import weatherApp from "../assets/portfolio/weatherApp.png";

const Portfolio = () => {

  const openProjectInNewTab = (link) => {
    window.open(link, '_blank');
  };

  const portfolios = [
    {
      id: 1,
      src: AmazonClone,
      link: 'https://shuvayu-amazon-clone.netlify.app',
    },
    {
      id: 2,
      src: NetflixClone,
      link: 'https://shuvayu-netflix-clone.netlify.app',
    },
    {
      id: 3,
      src: DrumKit,
      link: 'https://shuvayu-drum-kit.netlify.app',
    },
    {
      id: 4,
      src: textutils,
      link: 'https://shuvayu-textutils-react.netlify.app'
    },
    {
      id: 5,
      src: TodosList,
      link: 'https://shuvayu-todoslist.netlify.app',
    },
    {
      id: 6,
      src: weatherApp,
      link: 'https://shuvayu-weather-app.netlify.app',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => openProjectInNewTab(link)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
