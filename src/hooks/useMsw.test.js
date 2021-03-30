import { renderHook } from '@testing-library/react-hooks';
import useMsw from './useMsw';
import { server } from '../mocks/server';

describe("Custom dev hook useMsw", () => {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    test("Should return a list of mock videos", async () => {
        const { result, waitForNextUpdate } = renderHook( () => useMsw("/videos") )

        result.current.getVideos()
        await waitForNextUpdate()

        expect( result.current.videos.length ).toBeGreaterThanOrEqual(24)
    })
})