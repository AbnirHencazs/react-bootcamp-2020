import React from 'react';
import { useParams } from 'react-router-dom'
import useGapi from '../../hooks/useGapi';
import { useGlobals } from '../../state/GlobalProvider'
import { REMOVE_FAVOURITE } from '../../utils/constants';

const VideoPlayer = () =>{
    const { videoId } = useParams();
    const { video, isLoading } = useGapi("", videoId, false)
    const { addFavourite, removeFavourite, favourites } = useGlobals() 
    const checkVideo = () => {
        if(video === undefined) return false;

        return true
    }

    const inFavourites = () => {
        let favourited = false
        favourites.forEach(favourite => {
            if(favourite.id === video.id){
                favourited = true
            }
        });
        return favourited
    }
    
    return(
        
        <div className="flex flex-col w-full md:w-8/12 max-h-full px-10 ">
            <iframe className="w-full h-2/5 md:h-4/5" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="flex h-1/5">
                { isLoading ? "Cargando":"" }
                { !isLoading && checkVideo(video) ? 
                    <div>
                        <h1 className="text-lg font-bold">
                            <p className="no-underline hover:underline text-gray-800 text-opacity-80 dark:text-white">
                                {video.snippet.title}
                            </p>
                        </h1>
                        <p className="text-gray-800 text-opacity-80 dark:text-white">
                            {
                                (video.snippet.description.length > 250) ?
                                `${video.snippet.description.substring(0, 250)}... `
                                :
                                video.snippet.description
                            }
                        </p>
                        <div className="flex flex-row">
                            {
                                inFavourites()
                                ?<button className="z-10" onClick={ () => removeFavourite(video)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </button> 
                                :<button className="z-10" onClick={() => addFavourite(video)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </button>
                            }
                        </div>
                    </div>
                    : "Sín titulo" }
            </div>
        </div>
        
    )
}

export default VideoPlayer;