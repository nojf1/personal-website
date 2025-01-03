import React from "react";
import img2704 from "../images/IMG_2704.jpg";

const AboutPage = () => {
  return (
    <main className="bg-gray-100 text-gray-800 text-base md:text-lg">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            About Me
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl">
            A passionate software engineering student dedicated to learning and
            innovation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12">
          <div className="flex-1">
            <img
              src={img2704}
              alt="About me"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-none"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Hello, I'm Nicole
            </h2>
            <p className="mt-6 text-lg md:text-lg lg:text-2xl">
              I'm currently pursuing a degree in Software Engineering at Wawasan
              Open University. My journey in the world of technology started at
              a young age, and my passion for coding and problem-solving has
              only grown since then. I enjoy working on projects that challenge
              me to learn new skills and apply my knowledge in innovative ways.
            </p>
            <p className="mt-6 text-lg md:text-lg lg:text-2xl">
              My areas of interest include web development, application
              development, and artificial intelligence. I am proficient in
              languages such as JavaScript and Java, and I am always eager to
              learn more.
            </p>
            <p className="mt-6 text-lg md:text-lg lg:text-2xl">
              When I'm not coding, you can find me taking photos of cats.
            </p>
            <a
              href="/portfolio"
              className="mt-8 inline-block bg-gray-800 text-white text-base md:text-lg font-semibold py-3 px-6 rounded-lg hover:bg-gray-900 transition-all"
            >
              View My Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-200 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-3xl font-bold">Web Development</h3>
              <p className="mt-4 text-xl">
                Proficient in HTML, CSS, JavaScript, React, and Node.js.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-3xl font-bold">Programming Languages</h3>
              <p className="mt-4 text-xl">
                Proficient in JavaScript, Java and Java Spring Boot framework.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-3xl font-bold">Database Management</h3>
              <p className="mt-4 text-xl">
                Experienced in working with SQL like MySQL databases.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-3xl font-bold">Version Control</h3>
              <p className="mt-4 text-xl">
                Proficient in using Git and GitHub for version control and
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
