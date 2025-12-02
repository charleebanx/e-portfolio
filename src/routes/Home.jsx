import React from "react";
import { Link } from "react-router-dom";
import Timeline from "../assets/components/Timeline";
import ThemedButton from "../assets/ThemedButton";
function ProfilePhoto() {
  return (
    <img
      className="w-40 h-40 object-cover rounded-full mx-auto"
      src="images/pfp.png"
      alt="Charlee"
    />
  );
}

function NavButton({ to, label }) {
  const isExternal = to.startsWith("http") || to.endsWith(".pdf");

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        <ThemedButton label={label} />
      </a>
    );
  }

  return (
    <Link to={to}>
      <ThemedButton label={label} />
    </Link>
  );
}

const Home = () => {
  const baseLink = "/e-portfolio";
  return (
    <div className="min-h-screen bg-#f8fafc w-full flex flex-col items-center pt-20">
      <div className="max-w-3xl w-full text-center m-6">
        <ProfilePhoto />
        <h2 className="font-bold text-3xl mt-6">Charlee Anne Rodriguez</h2>
        <p className="mt-4 mb-6">
          Combining front-end development with information science principles
          and UI/UX design thinking to help companies deliver polished,
          user-focused products.
        </p>

        <div className="flex justify-center space-x-3 mb-10">
          <NavButton to="/about" label="About" />
          <NavButton to={`${baseLink}/files/CharleeAnneRodriguez_Resume_EPortfolio.pdf`} label="Resume"/>
          <NavButton to="https://github.com/charleebanx" label="GitHub" />
          <NavButton
            to="https://www.linkedin.com/in/charlee-anne-rodriguez-941b09252/"
            label="LinkedIn"
          />
        </div>
      </div>
      <div className="w-full max-w-4xl px-6">
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
