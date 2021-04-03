import React from 'react';
import { useParams } from 'react-router-dom'
import useGapi from '../../hooks/useGapi';

const VideoPlayer = () =>{
    const { videoId } = useParams();
    const { video, isLoading } = useGapi("", videoId, false)
    const checkVideo = () => {
        if(video === undefined) return false;
        console.log(video)
        return true
    }
    return(
        
        <div className="flex flex-col w-full md:w-8/12 max-h-full px-10 ">
            <iframe className="w-full h-2/5 md:h-4/5" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="flex h-1/5">
                {
                    isLoading ?
                    "Cargando":
                    checkVideo(video) ? 
                    <div>
                        <h1 className="text-lg font-bold">
                            <p className="no-underline hover:underline text-gray-800 text-opacity-80 ">
                                {video.snippet.title}
                            </p>
                        </h1>
                        <p className="text-gray-800 text-opacity-80 ">
                            {
                                (video.snippet.description.length > 250) ?
                                `${video.snippet.description.substring(0, 250)}... `
                                :
                                video.snippet.description
                            }
                        </p>
                        
                    </div>
                    
                    : "Sín titulo"
                }
            </div>
        </div>
        
    )
}

export default VideoPlayer;