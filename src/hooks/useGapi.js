import { useState, useEffect } from 'react';

const useGapi = (search) => {

    const [ videos, setVideos ] = useState([])
    const { client, load } = window.gapi;

    useEffect( () => {
        if( client === undefined ) return;
        initGapi()
    }, [ search, client] )

    const loadGapi = () => new Promise( (resolve,reject) => {

        try {
            load('client', () => {
                client.init({apiKey: process.env.REACT_APP_APIKEY})
                    .then(resolve)
            })
        } catch (error) {
            reject(error)
        }

    } )
    const initGapi = async () => {
        try {
            await loadGapi()
        } catch (error) {
            
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