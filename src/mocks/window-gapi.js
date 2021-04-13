import mockData from '../youtube-videos-mock'

export default window = {
    gapi:{
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
}