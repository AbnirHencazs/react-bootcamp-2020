import { renderHook, act } from '@testing-library/react-hooks';
import useGapi from './useGapi';
import { server } from '../mocks/server';

describe("Custom hook useGapi", () => {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    test('Should return a list of Youtube videos', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useGapi("/videos") )

        result.current.getVideos()

        await waitForNextUpdate()
    
        expect( result.current.videos.length ).toBeGreaterThanOrEqual(24)
    })
})

