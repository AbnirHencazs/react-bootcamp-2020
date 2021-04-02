import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos'
import Navbar from '../../components/Navbar';

const VideoPage = () => {
    
    return(
        <>
            <Navbar/>
            <div className="flex h-screen mt-5">
                <div className="flex flex-column w-full h-4/5">
                    <VideoPlayer
                        />
                    <RelatedVideos
                        />
                </div>
            </div>
        </>
    )
}

export default VideoPage