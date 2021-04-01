import React, { useContext } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos'

const VideoPage = () => {
    const { selectedVideo, setSelectedVideo } = useContext(VideoContext)
    return(
        <>
            <h1>Soy una pagina de vídeo</h1>
            <VideoPlayer
                video={selectedVideo}/>
            <RelatedVideos
                video={selectedVideo}/>
        </>
    )
}

export default VideoPage()