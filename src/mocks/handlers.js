import {rest } from 'msw'
import mockData from '../youtube-videos-mock';

export const handlers = [
    rest.get('/videos', (req, res, ctx) => {
        return res(
            ctx.json({
                mockData
            }),
            ctx.status(200)
        )
    } )
]