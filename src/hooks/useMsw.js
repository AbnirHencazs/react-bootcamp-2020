import { useState } from 'react'

const useMsw = (url) => {
    const [videos, setVideos] = useState([])

    const getVideos = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()

            setVideos( data.mockData.items )

        } catch (error) {
            console.log( error )
        }
    }

    return { videos, getVideos }
}

export default useMsw;