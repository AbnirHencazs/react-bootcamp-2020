import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-column w-100 justify-center md:justify-between px-5 py-5 bg-blue-300 mb-3">
        <div className="flex justify-between md:w-4/12 m-auto md:m-0">
          <div className="m-auto">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <div className="m-auto">
            <input
              className="focus:ring focus:outline-none focus:border-blue-500 px-3 py-2 w-20 md:w-60 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex justify-between md:w-2/12 m-auto md:m-0">
          <div className="m-auto border-2 rounded-full border-white bg-white hover:bg-blue-200">
            <svg
              className="flex w-6 md:w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div className="m-auto border-2 rounded-full border-white bg-white hover:bg-blue-200">
            <svg
              className="flex w-6 md:w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
