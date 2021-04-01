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
                console.log(process.env.REACT_APP_APIKEY_2)
                client.init({
                    apiKey: process.env.REACT_APP_APIKEY_2,
                })
                    .then(resolve)
            })
        } catch (error) {
            reject(error)
        }

    } )
    const initGapi = async () => {
        try {
            await loadGapi()
            getVideos()
        } catch (error) {
            
        }
    }
    
    const getVideos = async () => {
        
        const response = await client.request({
            path: `https://www.googleapis.com/youtube/v3/search`,
            params: {
                part:'snippet',
                maxResults:25,
                chart:'mostPopular',
                regionCode:'us',
                q:search
            }
        })

        const data = response.result.items
        
        setVideos(data)
        console.log(data)
    }

    return { videos }
}

export default useGapi;