import React from 'react';
import { useParams } from 'react-router-dom'

const VideoPlayer = () =>{
    const { videoId } = useParams();
    return(
        
        <div className="flex w-8/12 h-4/5 px-10">
            <iframe className="w-full h-5/5" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        
    )
}

export default VideoPlayer;