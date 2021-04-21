import React from 'react'
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './index'
import mockData from '../../youtube-videos-mock'
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';

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
    test("renders Login Page", () => {
        render(
            <MemoryRouter
                initialEntries={["/login"]}>
                <LoginPage/>
            </MemoryRouter>
        )
        const heading = screen.getByRole("heading",{
            name: /Ingresa a tu cuenta/i
        })
        const loginForm = screen.getByRole("form")
        const loginButton = screen.getByRole("button",{
            name: /Ingresar/i
        })

        expect(heading).toBeInTheDocument()
        expect(loginForm).toBeInTheDocument()
        expect(loginButton).toBeInTheDocument()
    })
    test("Renders Favourites page", ()=>{
        render(
            <MemoryRouter
                initialEntries={["favourites"]}
                initialIndex={1}>
                <App/>
            </MemoryRouter>
        )

        const FavouriteVideosList = screen.getAllByRole("article")

        expect(FavouriteVideosList.length).toBeGreaterThanOrEqual(0)
    })
    test("renders favourite video detail page", () => {
        render(
            <MemoryRouter
                initialEntries={[`/favourites/${mockData.items[1].id.videoId}`]}
                initialIndex={1}>
                <App/>
            </MemoryRouter>
        )
        
        const VideoTitle = screen.getByRole("heading")
        const VideoDescription = screen.getByRole("paragraph")
        const FavouriteVideosList = screen.getAllByRole("article")

        expect(VideoTitle).toBeInTheDocument()
        expect(VideoTitle).toHaveClass("")
        expect(VideoDescription).toBeInTheDocument()
        expect(VideoDescription).toHaveClass()
        expect(FavouriteVideosList.length).toBeGreaterThanOrEqual(1)
    })
    test("renders 404 page", () => {
        render(
            <MemoryRouter
                initialEntries={["*"]}>
                <NotFound/>
            </MemoryRouter>
        )

        const NotFoundTitle = screen.getByRole("heading", {
            name: /Not all who wander are lost, but i'm afraid you are/i
        })

        expect(NotFoundTitle).toBeInTheDocument()
    })
})