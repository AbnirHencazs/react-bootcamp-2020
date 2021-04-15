import React from 'react';
import { screen, render } from '@testing-library/react';
import mockData from '../../youtube-videos-mock'
import Home from './Home.page';
import { useParams } from 'react-router-dom';

describe("Home page", () => {
  beforeAll( () => {

    useParams.mockImplementation(() => ({ searchQuery: '' }));

    window.gapi = {
      load: ( _ , fn) => {
          fn()
      },
      client: {
          init: jest.fn().mockResolvedValue(),
          request: jest.fn().mockResolvedValue(
              {
                  result: mockData
              }
          )
      }
    }
  } )
    test("renders Navbar", () => {
        render(
          <Home/>
        )
        const Navbar = screen.getByRole('navigation');

        expect( Navbar ).toBeVisible()
        expect( Navbar ).toHaveClass("flex flex-column w-100 justify-center md:justify-between px-5 py-5 bg-blue-300 dark:bg-indigo-900 dark:bg-opacity-60")
        expect( Navbar ).toMatchInlineSnapshot(`
        <nav
          class="flex flex-column w-100 justify-center md:justify-between px-5 py-5 bg-blue-300 dark:bg-indigo-900 dark:bg-opacity-60"
        >
          <div
            class="flex justify-between md:w-4/12 m-auto md:m-0"
          >
            <div
              class="m-auto"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div
              class="m-auto"
            >
              <form>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Search"
                  type="text"
                  value=""
                />
              </form>
            </div>
          </div>
          <div
            class="flex justify-between md:w-2/12 m-auto md:m-0"
          >
            <div
              class="m-auto border-2 rounded-full border-white bg-white hover:bg-blue-200 cursor-pointer"
            >
              <svg
                class="flex w-6 md:w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </svg>
            </div>
            <div
              class="m-auto border-2 rounded-full border-white bg-white hover:bg-blue-200"
            >
              <svg
                class="flex w-6 md:w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </svg>
            </div>
          </div>
        </nav>
      `)
    });

    test("renders VideoCarList component", () => {
        render(<Home/>)
        const VideoCardList = screen.getByTestId('VideoCardList')

        expect( VideoCardList ).toBeInTheDocument()
    })
})