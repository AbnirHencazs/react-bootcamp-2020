import React from 'react'
import { screen, render } from '@testing-library/react'
import Favourite from './Favourite.page'

describe("Favourites page", () => {
    test("renders correctly", () => {
        render(
            <Favourite/>
        )

        const result = screen.getByRole('navigation')
        expect(result).toBeInTheDocument()
    })
})