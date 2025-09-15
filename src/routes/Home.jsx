import React from "react";
import { Link } from "react-router-dom";
function ProfilePhoto() {
  return (
    <img
      className="size-40 object-center rounded-full"
      src="images/pfp.png"
      alt="Charlee"
    />
  );
}

function NavButton({ to, label }) {
  return (
    <Link to={to}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
        {label}
      </button>
    </Link>
  );
}

function DownloadResume({ file, label }) {
  return (
    <a
      href={file}
      download={file}
      className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
    >
      {label}
    </a>
  );
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 w-full flex items-center justify-center">
      <div className="justify-items-center m-6">
        <ProfilePhoto />
        <h1 className="font-bold text-3xl m-6">Welcome</h1>
        <p className="m-5">
          Charlee Anne Rodriguez is completing a Bachelor of Science in
          Information Science with a concentration in Web Development
          Technologies at the University of South Florida, graduating in
          December 2025. Born in the Philippines and raised in Palm Beach
          County, she now resides in Tampa and is fluent in both English and
          Filipino. She specializes in web development, IT, and UI/UX design,
          with technical skills in Java, Python, JavaScript, HTML/CSS, React,
          Tailwind, and Figma. Her experience includes tutoring at Mathnasium,
          coaching coding at theCoderSchool, and contributing to CODI, a startup
          focused on gamified programming education.Charlee is passionate about
          building accessible, user-focused technology and is open to employment
          opportunities starting in January 2025.
        </p>

        <div className="justify-items-center flex space-x-3 ">
          <NavButton to="/contact" label="Contact" />
          <NavButton to="/about" label="About" />
          <DownloadResume
            file="files/CharleeAnneRodriguez_Resume_EPortfolio.pdf"
            label="Resume"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
