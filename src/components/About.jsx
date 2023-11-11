import React from "react";

const About = () => {
  return (
    <div
    name="about"
    className= "w-full py-5 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"
          >About</p>
        </div>

        <p
        className="text-xl"
        >
          Hello there! I'm Shuvayu Patra. I'm a 3rd-year Information Technology student at Netaji Subhash Engineering College in Kolkata, West Bengal.
        </p>

        <br />

        <p className="text-xl">
        I am passionate about coding. I code in C, C++ and java.I have solved more than 500 questions on leetcode and I am currently gaining control on MERN stack.
Besides I love to play Indoor and outdoor games and also love to listen music.
        </p>
      </div>
    </div>
  );
};

export default About;
