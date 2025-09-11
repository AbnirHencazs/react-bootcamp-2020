import React from 'react'
import { screen, render } from '@testing-library/react'
import mockData from '../../youtube-videos-mock'
import { MemoryRouter } from 'react-router'
import App from '../App/App.component'

describe("Protected component", () => {
    test("unlogged user trying to access favourites redirects to login", () => {
        render(
            <MemoryRouter
                initialEntries={["/favourites"]}>
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByRole("heading", { name: /Ingresa a tu cuenta/i })).toBeInTheDocument()
    })
})