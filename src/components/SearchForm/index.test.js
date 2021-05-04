import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import SearchForm from './index';
import userEvent from '@testing-library/user-event';
import GlobalProvider, { useGlobals } from '../../state/GlobalProvider';

const submitSearchQuery = jest.fn()
jest.mock('../../state/GlobalProvider', () => {
    return({
        __esModule: true, // this property makes it work
        ...jest.requireActual('../../state/GlobalProvider'),
        useGlobals: jest.fn()
    })
})
describe( 'SearchForm', () => {
    beforeAll( () => {
        
        useGlobals.mockReturnValue( {
            submitSearchQuery
        } )
    })
    
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

    test("test submit state changed", () => {
        const { submitSearchQuery } = useGlobals()
        
        render(
            <GlobalProvider>
                <SearchForm/>
            </GlobalProvider>
        )
        const input = screen.getByPlaceholderText(/Search/i)
        userEvent.type(input, "Wizeline")
        fireEvent.submit(screen.getByRole("form"))
        expect(submitSearchQuery).toHaveBeenCalledWith("Wizeline")
    })
} );