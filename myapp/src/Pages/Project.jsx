import React from "react";
import Flappy from "../images/FlappyBird.jpg";
import PGApp from "../images/PictureGallery.png";
import { Link } from "react-router-dom";

import "./Project.css";

const Project = () => {
  return (
    <>
      <section className="bg-yellow-300 pb-1">
        <h1 className="text-4xl font-bold flex items-center justify-center p-2 bg-yellow-400">
          FlappyBird
        </h1>

        <div className="flex items-center justify-between">
          <div>
            <img
              className="rounded-lg mt-3 ml-3 floating-animation drop-shadow-md"
              src={Flappy}
              alt="img"
            />
          </div>

          <div className="p-5">
            <p className=" mr-5 ml-5 text-justify">
              Project Title: <b>Flappy Bird Game</b> Clone in Java Project
              Description: The "Flappy Bird Game Clone in Java" is a classic and
              addictive 2D game that replicates the popular mobile game "Flappy
              Bird." This mini-project demonstrates your programming skills and
              creativity by implementing a simple yet engaging game where
              players navigate a bird through obstacles by tapping on their
              keyboard. The game showcases your ability to design graphical user
              interfaces, handle user input, manage game physics, and create an
              enjoyable gaming experience.
              <p>
                <Link
                  className="font-bold text-2xl text-blue-600"
                  to="https://github.com/soumilnimbalkar26"
                >
                  Github
                </Link>
              </p>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-400 pb-1 mt-1">
        <h1 className="text-4xl font-bold flex items-center justify-center p-2 bg-gray-500">
          Picture Gallery
        </h1>

        <div className="flex items-center justify-between">
          <div>
            <img
              className="rounded-lg mt-3 ml-3 floating-animation drop-shadow-xl"
              src={PGApp}
              alt="img"
            />
          </div>

          <div className="p-5">
            <p className=" mr-5 ml-5 text-justify">
              Project Title: <b>The Picture Gallery App</b> is a responsive web
              application built using HTML, Tailwind CSS, JavaScript, and React
              JS. The app allows users to view a collection of images sourced
              from the Unsplash API. It fetches images along with their authors,
              descriptions, and links to the original images on unsplash.com.
              <p>
                <Link
                  className="font-bold text-2xl text-blue-600"
                  to="https://github.com/soumilnimbalkar26"
                >
                  Github
                </Link>
              </p>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-400 pb-1 mt-1">
        <h1 className="text-4xl font-bold flex items-center justify-center p-2 bg-gray-500">
          Picture Gallery
        </h1>

        <div className="flex items-center justify-between">
          <div>
            <img
              className="rounded-lg mt-3 ml-3 floating-animation drop-shadow-xl"
              src={PGApp}
              alt="img"
            />
          </div>

          <div className="p-5">
            <p className=" mr-5 ml-5 text-justify">
              Project Title: <b>The Picture Gallery App</b> is a responsive web
              application built using HTML, Tailwind CSS, JavaScript, and React
              JS. The app allows users to view a collection of images sourced
              from the Unsplash API. It fetches images along with their authors,
              descriptions, and links to the original images on unsplash.com.
              <p>
                <Link
                  className="font-bold text-2xl text-blue-600"
                  to="https://github.com/soumilnimbalkar26"
                >
                  Github
                </Link>
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
