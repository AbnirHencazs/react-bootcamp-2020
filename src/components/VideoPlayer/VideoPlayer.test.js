import React from 'react'
import { screen, render } from '@testing-library/react'
import VideoPlayer from './index'
import mockData from '../../youtube-videos-mock'
import GlobalProvider, { useGlobals } from '../../state/GlobalProvider'
import userEvent from '@testing-library/user-event'

const addFavourite = jest.fn()
const favourites = []
jest.mock('../../state/GlobalProvider', () => {
    return({
        __esModule: true,
        ...jest.requireActual('../../state/GlobalProvider'),
        useGlobals: jest.fn()
    })
})
describe("Video Player", () => {
    beforeAll( () => {
        useGlobals.mockReturnValue({
            addFavourite,
            favourites
        })
    } )
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

    test("add favourite is called after clicking favourite icon", () => {
        const { addFavourite } = useGlobals()
        render(
            <GlobalProvider>
                <VideoPlayer
                    video={mockData.items[1]}/>
            </GlobalProvider>
        )

        const addFavouriteButton = screen.getAllByRole("button")
        userEvent.click(addFavouriteButton[0])
        expect(addFavourite).toHaveBeenCalledWith(mockData.items[1])
    })
})