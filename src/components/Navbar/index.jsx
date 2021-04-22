import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useGlobals } from '../../state/GlobalProvider';
import SearchForm from '../SearchForm';

const Navbar = () => {
  const history = useHistory()
  const { toggleTheme, user, updateUser } = useGlobals();
  const [dropDown, setDropDown] = useState(false)
  
  const handleLogout = () => {
    updateUser()
    setDropDown(false)
  }
  return (
    <>
      <nav className="flex flex-column w-100 justify-center md:justify-between px-5 py-5 bg-blue-300 dark:bg-indigo-900 dark:bg-opacity-60">
        <div className="flex justify-between md:w-4/12 m-auto md:m-0">
          <div className="m-auto cursor-pointer" onClick={() => history.push("/favourites")}>
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
            <SearchForm/>
          </div>
        </div>
        <div className="flex justify-between md:w-2/12 m-auto md:m-0">
          <div className="m-auto border-2 rounded-full border-white bg-white hover:bg-blue-200 cursor-pointer" onClick={ toggleTheme }>
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
          <div onClick={() => {setDropDown(!dropDown)}} className="m-auto border-2 rounded-full border-white cursor-pointer bg-white hover:bg-blue-200">
            {
              user.authenticated ?
              <img className="rounded-full h-10 w-10 cursor-pointer" src={user.avatarUrl} alt="user avatar"/>
              :
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
            }
          </div>
        </div>
        {
          dropDown ?
          <div className="fixed right-0 mt-5 mr-20 bg-white shadow rounded">
            {
              (user.authenticated) ?
              <div className="dropdown inline-block relative">
                <div className=" py-2 px-4 rounded inline-flex items-center">
                  {`Welcome, ${user.name}`}
                </div>
                <ul className="dropdown-menu absolute  text-gray-700 pt-1">
                  <li className=""><button to="/login" onClick={handleLogout} className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Log out</button></li>
                </ul>
              </div>
              : 
              <div className="dropdown inline-block relative">
                <div className=" py-2 px-4 rounded inline-flex items-center">
                  You're not logged in
                </div>
                <ul className="dropdown-menu absolute  text-gray-700 pt-1">
                  <li className=""><Link to="/login" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Log in</Link></li>
                </ul>
              </div>
            }
          </div>
          :<div className="hidden"></div>
        }
      </nav>
    </>
  );
};

export default Navbar;
