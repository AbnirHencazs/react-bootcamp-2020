import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import { useParams } from 'react-router-dom'
import useGapi from '../../hooks/useGapi'
import RelatedVideos from '../../components/RelatedVideos'
import Navbar from '../../components/Navbar';

const VideoPage = () => {
    const { videoId } = useParams()
    const { video, isLoading } = useGapi("", videoId, false)
    const { videos } = useGapi("", videoId)
    return(
        <>
            <Navbar/>
            <div className="flex h-screen pt-5 dark:bg-gray-800">
                <div className="flex flex-col md:flex-row w-full h-4/5">
                    <VideoPlayer
                        isLoading={isLoading}
                        video={video}
                        videoId={videoId}
                        />
                    <RelatedVideos
                        isLoading={isLoading}
                        videos={videos}/>
                </div>
            </div>
        </>
    )
}

export default VideoPage