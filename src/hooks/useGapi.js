import { useState, useEffect, useCallback } from 'react';

const useGapi = (search = "", relatedTo = "", isList = true) => {

    const [ videos, setVideos ] = useState([])
    const [ video, setVideo ] = useState(undefined)
    const [ isLoading, setIsLoading ] = useState(false)
    const { client, load } = window.gapi;

    useEffect( () => {
        if( client === undefined ) return;
        initGapi()
    }, [ search, client, relatedTo, isList] )

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
    
    const getVideos = useCallback( async () => {
        if(isList){
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
        }else{
            const response = await client.request({
                path:`https://www.googleapis.com/youtube/v3/videos`,
                params:{
                    part: "snippet",
                    id: relatedTo
                }
            })
            const data = response.result.items[0]
            setVideo(data)
            setIsLoading(false)
        }
    }, [search, relatedTo, isList] )

    return { videos, video, isLoading }
}

export default useGapi;