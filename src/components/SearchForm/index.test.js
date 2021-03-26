import React from 'react'
import { screen, render } from '@testing-library/react';
import SearchForm from './index';

describe( 'SearchForm', () => {
    test("render initially", () => {
        render( <SearchForm/> )
        const searchInput = screen.getByPlaceholderText("Search")

        expect( searchInput ).toBeInTheDocument()
    })
} );