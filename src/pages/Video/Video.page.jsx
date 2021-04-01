import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos'

const VideoPage = () => {
    return(
        <>
            <h1>Soy una pagina de vídeo</h1>
            <VideoPlayer
                video={video}/>
            <RelatedVideos
                video={video}/>
        </>
    )
}

export default VideoPage()