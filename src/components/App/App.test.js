import React from 'react'
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './index'
import mockData from '../../youtube-videos-mock'

describe("App component", () => {
    beforeAll( () => {
        window.gapi = {
            load: ( _ , fn) => {
                fn()
            },
            client: {
                init: jest.fn().mockResolvedValue(),
                request: jest.fn().mockResolvedValue(
                    {
                        result: mockData
                    }
                )
            }
          }
    } )
    test("renders HomePage", () => {
        render( 
            //https://reactrouter.com/web/api/MemoryRouter
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
        const VideoCardListComponent = screen.getByTestId("VideoCardList")
        const NavbarComponent = screen.getByRole('navigation');
        
        expect( VideoCardListComponent ).toBeInTheDocument()
        expect( NavbarComponent ).toBeInTheDocument()
    })
})