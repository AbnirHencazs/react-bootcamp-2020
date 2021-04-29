import React from 'react'
import { screen, render } from '@testing-library/react';
import SearchForm from './index';

describe( 'SearchForm', () => {
    test("render initially", () => {
        render( <SearchForm/> )
        const searchInput = screen.getByPlaceholderText("Search")

        expect( searchInput ).toBeInTheDocument()
        expect( searchInput ).toMatchInlineSnapshot(`
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Search"
              type="text"
              value=""
            />
        `)
    })

    test("input value is written",() => {
        render( <SearchForm/>)

        const searchInput = screen.getByPlaceholderText(/Search/i)
        userEvent.type(searchInput, 'Wizeline')
        expect(searchInput).toHaveValue('Wizeline')
    })
} );