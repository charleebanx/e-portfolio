import React from 'react'
import { Link } from 'react-router-dom'

function ProfilePhoto() {
  return (
    <img className="size-40 object-center rounded-full" src="images/pfp.png" alt="Charlee" />
  );
}

function NavButton({ to, label }) {
  return (
    <Link to = {to}>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
        {label}
      </button>
    </Link>
  );
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 w-full flex items-center justify-center">
      <div className="justify-items-center m-6">
        <ProfilePhoto />
        <h1 className="font-bold text-3xl m-6">Welcome</h1>
        <p className="m-5">Hi, I’m Charlee from Tampa, FL. I’m passionate about programming, UI/UX design, and IT. <br />This website showcases my technical skills and creative work ranging from software development to UI/UX design and IT while reflecting my passion for building thoughtful, user-focused solutions.</p>
        
        <div className="justify-items-center flex space-x-3 ">
          <NavButton to="/contact" label="Contact" />
          <NavButton to="/about" label="About" />
        </div>

      </div>
    </div>
  )
}

export default Home
