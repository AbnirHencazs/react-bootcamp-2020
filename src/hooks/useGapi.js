import { useState, useEffect } from 'react';

const useGapi = (search) => {

    const [ videos, setVideos ] = useState([])
    const { client, load } = window.gapi;

    useEffect( () => {
        if( client === undefined ) return;
        initGapi()
    }, [ search, client] )

    const initGapi = () => {
        try {
            load('client', async () => {
                await client.init({ apiKey: process.env.REACT_APP_APIKEY, })
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    const getVideos = async () => {
        const response = await client.request({
            path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}`,
        })
        const data = response.result.items
        
        setVideos(data)
    }

    return { videos, getVideos, client }
}

export default useGapi;