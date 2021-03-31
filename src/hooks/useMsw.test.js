import { renderHook } from '@testing-library/react-hooks';
import useMsw from './useMsw';
import { server } from '../mocks/server';

describe("Custom dev hook useMsw", () => {
<<<<<<< HEAD
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    test("Should return a list of mock videos", async () => {
=======
    beforeAll( () => server.listen() )
    afterEach( () => server.resetHandlers() )
    afterAll( () => server.close() )

    test("Return a list of mock videos", async () => {
>>>>>>> 50b53e63c22e01be8b6a81d1795936c9fcf9c8e3
        const { result, waitForNextUpdate } = renderHook( () => useMsw("/videos") )

        result.current.getVideos()
        await waitForNextUpdate()

        expect( result.current.videos.length ).toBeGreaterThanOrEqual(24)
    })
})