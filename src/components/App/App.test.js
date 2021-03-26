import React from 'react'
import { screen, render } from '@testing-library/react';
import App from './index'

describe("App component", () => {
    test("renders HomePage", () => {
        render( <App/> )

        const title = screen.getByRole("heading", {
            name: "Awesome Video App - AVA"
        })
        expect( title ).toBeInTheDocument()
    })
})