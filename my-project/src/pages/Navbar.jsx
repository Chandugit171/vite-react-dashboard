import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col p-4">
          {/* Close button for mobile */}
          {isOpen && (
            <div className="lg:hidden self-end">
              <button
                onClick={toggleNavbar}
                className="text-white p-2 focus:outline-none focus:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Hamburger icon for mobile */}
          <div className={`lg:hidden self-start mb-4 ${isOpen ? 'hidden' : 'block'}`}>
            <button
              onClick={toggleNavbar}
              className="text-white p-2 focus:outline-none focus:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navbar links */}
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
            <ul className="flex gap-10  ">
              <li>
                <a href="#" className="text-white hover:text-blue-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
