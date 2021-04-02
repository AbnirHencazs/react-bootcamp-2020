import { useState, useEffect } from 'react';

const useGapi = (search = "", relatedTo = "") => {

    const [ videos, setVideos ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const { client, load } = window.gapi;

    useEffect( () => {
        if( client === undefined ) return;
        initGapi()
    }, [ search, client] )

    const loadGapi = () => new Promise( (resolve,reject) => {

        try {
            load('client', () => {
                client.init({
                    apiKey: process.env.REACT_APP_APIKEY,
                })
                    .then(resolve)
            })
        } catch (error) {
            reject(error)
        }

    } )
    const initGapi = async () => {
        try {
            setIsLoading(true)
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
                q:search,
                relatedToVideoId: relatedTo,
                type:"video",
            }
        })
        const data = response.result.items
        setVideos(data)
        setIsLoading(false)
        console.log(data)
    }

    return { videos, isLoading }
}

export default useGapi;