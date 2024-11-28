import React from "react";

const HomePage = () => {
  return (
    <main className="bg-gray-100 text-gray-800 text-base md:text-lg">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Welcome to My Portfolio
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl">
            Showcasing my work, skills, and passion for design and development.
          </p>
          <a
            href="https://github.com/nojf1"
            rel="noreferrer noopener"
            target="_blank"
            className="mt-8 inline-block bg-blue-600 text-white text-base md:text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400"
              alt="About me"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About Me
            </h2>
            <p className="mt-6 text-base md:text-lg lg:text-2xl">
              I'm a passionate developer and designer who loves creating
              beautiful and functional web applications. With a keen eye for
              detail and a drive for innovation, I strive to deliver top-quality
              work.
            </p>
            <a
              href="/about"
              className="mt-6 inline-block bg-gray-800 text-white text-base md:text-lg font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My Portfolio
          </h2>
          <p className="mt-6 text-xl md:text-lg lg:text-2xl">
            A showcase of my recent projects and accomplishments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Portfolio Items */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              {/* <img
                src="https://via.placeholder.com/300"
                alt="Project 1"
                className="rounded-lg"
              /> */}
              <h3 className="text-3xl font-bold mt-4">
                Task Management Project
              </h3>
              <p className="mt-2 text-xl">
                A task management application built with React and Spring Boot.
              </p>
              <a
                href="https://github.com/nojf1/dse20403"
                rel="noreferrer noopener"
                target="_blank"
                className="mt-6 inline-block bg-gray-800 text-white text-base md:text-lg font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-all"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              {/* <img
                src="https://via.placeholder.com/300"
                alt="Project 2"
                className="rounded-lg"
              /> */}
              <h3 className="text-3xl font-bold mt-4">
                Learning Center Website
              </h3>
              <p className="mt-2 text-xl">
                Simple frontend website made with simple HTML, CSS, and
                JavaScript.
              </p>
              <a
                href="https://github.com/nojf1/dcs10203"
                rel="noreferrer noopener"
                target="_blank"
                className="mt-6 inline-block bg-gray-800 text-white text-base md:text-lg font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-all"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              {/* <img
                src="https://via.placeholder.com/300"
                alt="Project 3"
                className="rounded-lg"
              /> */}
              <h3 className="text-3xl font-bold mt-4">Battleship Java</h3>
              <p className="mt-2 text-xl">
                A simple battleship game made with Java, runs on console.
              </p>
              <a
                href="https://github.com/nojf1/battleship"
                rel="noreferrer noopener"
                target="_blank"
                className="mt-6 inline-block bg-gray-800 text-white text-base md:text-lg font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <a
            href="https://github.com/nojf1"
            rel="noreferrer noopener"
            target="_blank"
            className="mt-8 inline-block bg-blue-600 text-white text-base md:text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Explore More Projects
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
