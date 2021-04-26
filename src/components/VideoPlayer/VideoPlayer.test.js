import React from 'react'
import { screen, render } from '@testing-library/react'
import VideoPlayer from './index'
import mockData from '../../youtube-videos-mock'

describe("Video Player", () => {
    test("Renders correctly a video passed as a prop", () => {
        render(
            <VideoPlayer
                video={mockData.items[1]}/>
        )

        const header = screen.getByRole("heading", {
            name:/Video Tour | Welcome to Wizeline Guadalajara/i
        })

        expect(header).toBeInTheDocument()
        expect(header).toHaveClass("text-lg font-bold no-underline hover:underline text-gray-800 text-opacity-80 dark:text-white")
        expect( screen.getByText("Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...") )
        .toBeInTheDocument()
        expect( screen.getByText("Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...") )
        .toHaveClass("text-gray-800 text-opacity-80 dark:text-white")
    })
})