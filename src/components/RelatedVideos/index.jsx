import React from 'react';
import useGapi from '../../hooks/useGapi'
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

const RelatedVideos = () => {

    const { videoId } = useParams();
    const { videos, isLoading } = useGapi( "", videoId )
    const history = useHistory()
    
    const handleClick = (video) => {
        history.push(`/video/${video.id.videoId}`)
    }
    //Sometimes the reated video list returned will have missing snippet object
    //Use this function to check for prescence of said object
    const checkVideo = (video) =>{
        if(video.snippet===undefined) return false;

        return true
    }

    return(
        
            <div className="flex flex-col w-4/12 overflow-y-scroll border-l-2 border-gray-300 rounded-md">
                {
                    isLoading ? 
                    "Cargando"
                    :
                    videos.map( (video) =>(
                        checkVideo(video) ?
                        <div className="w-full my-1 p-1 cursor-pointer" onClick={() => handleClick(video)}>
                            <article className="overflow-hidden rounded-lg shadow-lg flex justify-between">
                                
                                <div className="flex">
                                    <img className="flex max-w-min" src={video.snippet.thumbnails.medium.url} alt=""/>
                                </div>
                                <div className="flex flex-col w-auto px-2">
                                    <h1 className="text-sm font-bold h-1/2">
                                        <p className="no-underline hover:underline text-gray-800 text-opacity-80 ">
                                            {video.snippet.title}
                                        </p>
                                    </h1>
                                    <div className="flex flex-wrap mt-2">
                                        <div className="flex flex-row mb-5">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                            </svg>
                                            <p className="m-auto ml-2 text-sm">
                                            {video.snippet.channelTitle}
                                            </p>
                                        </div>
                                        <div className="flex flex-row">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>
                                            <p className="m-auto ml-2 text-sm">
                                            {moment(video.snippet.publishedAt).fromNow()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        :
                        <>
                        </>
                    )
                     
                    )
                    
                }
            </div>
        
    )
}

export default RelatedVideos;