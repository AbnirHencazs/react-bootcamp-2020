import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos'
import Navbar from '../../components/Navbar';

const VideoPage = () => {
    
    return(
        <>
            <Navbar/>
            <div className="flex h-screen pt-5 dark:bg-gray-800">
                <div className="flex flex-col md:flex-row w-full h-4/5">
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