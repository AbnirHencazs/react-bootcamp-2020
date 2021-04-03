import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos'
import Navbar from '../../components/Navbar';
import { useHistory } from 'react-router-dom';

const VideoPage = () => {
    const history = useHistory()
    const updateSearch = (childData) =>{
        history.push(`/q:${childData}`)
    }
    return(
        <>
            <Navbar
                callBack={updateSearch}/>
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