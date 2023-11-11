import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import HeroImage from "../assets/images/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer.",
        "Programmer.",
        "Web Developer.",
        "Graphic Designer.",
        "Learner.",
        "Hustler.",
      ],
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      id="home"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800
      container pt-5"
    >
      <div className="row pt-5">
        <div className="col-sm-12 col-lg-6 order-last sm:order-first d-flex flex-column align-items-center justify-content-center">
          <p
            className="text-white text-3xl italic mt-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Hello,
          </p>
          <div
            className="text-3xl sm:text-7xl  text-white mt-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            I am
            <span className="text-amber-600 drop-shadow-2xl sm:text-5xl">
              {" "}
              Shuvayu
            </span>
            <span className="mb-4 sm:text-5xl"> Patra.</span>
          </div>
          <h3 className="mb-5 typeJs mt-3">
            <span className="text-2xl font-thin text-white mr-4 sm:text-5xl">
              A
            </span>
            <span
              ref={el}
              className="text-amber-600 text-2xl font-thin sm:text-5xl"
            ></span>
          </h3>
          {/* <p className="text-gray-500 py-4 max-w-md">
            hello
          </p> */}
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md btn text-white bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div className="col-sm-12 col-lg-6 order-first sm:order-last d-flex align-items-center justify-content-center">
          <img
            src={HeroImage}
            alt="my profile"
            width={"75%"}
            style={{ borderRadius: "5%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
