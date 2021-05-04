import { screen, render } from '@testing-library/react'
import React from 'react'
import mockVideos from '../../youtube-videos-mock'
import RelatedVideos from './index'

describe("Related videos component", () => {
    test("renders correctly", () => {
        render(
            <RelatedVideos
                videos={mockVideos.items}/>
        )

        const videoCards = screen.getAllByRole("article")
        expect(videoCards[1]).toBeInTheDocument()
        expect(videoCards[1]).toHaveClass("overflow-hidden rounded-lg shadow-lg flex justify-between")
        expect(videoCards.length).toBeGreaterThanOrEqual(24)
    })
})