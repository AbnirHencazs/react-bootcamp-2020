import React from 'react'
import { screen, render } from '@testing-library/react'
import FavouriteVideo from './FavouriteVideo.page'

describe("Favourite video page", () => {
    test("renders correctly", () => {
        render(
            <FavouriteVideo/>
        )

        const result = screen.getByRole('navigation')
        expect(result).toBeInTheDocument()
    })
})