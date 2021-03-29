import React, { useState, useEffect } from 'react';

const useGapi = (url) => {
    const [ videos, setVideos ] = useState([])

    const getVideos = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()

            setVideos(data)
        } catch (error) {
            console.log(error)
        }
    }

    return { videos, getVideos }
}

export default useGapi;