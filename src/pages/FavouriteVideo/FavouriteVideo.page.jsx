import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import { useParams } from 'react-router-dom'
import useGapi from '../../hooks/useGapi'
import RelatedVideos from '../../components/RelatedVideos'
import Navbar from '../../components/Navbar';
import { useGlobals } from '../../state/GlobalProvider';

const FavouriteVideoPage = () => {
    const { favouriteId } = useParams()
    const { favourites } = useGlobals()
   
    const video = favourites.find( favourite => favourite.id === favouriteId)
        
    return(
        <>
            <Navbar/>
            <div className="flex h-screen pt-5 dark:bg-gray-800">
                <div className="flex flex-col md:flex-row w-full h-4/5">
                    <VideoPlayer
                        video={video}
                        videoId={favouriteId}
                        />
                    <RelatedVideos
                    videos={favourites}/>
                </div>
            </div>
        </>
    )
}

export default FavouriteVideoPage