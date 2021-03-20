import React from 'react';
import moment from 'moment'

const VideoCard = ({snippet, channelInfo}) => {
    
    return(
        <>
            <div className="my-1 px-1 py-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg">
                    
                    <img alt="video thumbnail" className="block h-auto w-full" src={snippet.thumbnails.medium.url}/>
                
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg font-bold">
                            <p className="no-underline hover:underline text-gray-800 text-opacity-80 " href="google.com">
                                {snippet.title} 
                            </p>
                        </h1>
                        
                    </header>
                    
                    <div className="flex items-center justify-between p-2 md:px-4">
                        <p className="text-gray-800 text-opacity-80 text-sm leading-thight">
                            {snippet.description.substring(0, 150)}...
                        </p>
                    </div>
                    
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex justify-between items-center no-underline hover:underline text-black" href="/channel/wizeline">
                            <img alt="channel thumbnail" className="rounder-full w-10" src={channelInfo.snippet.thumbnails.default.url}/>
                            <p className="m-auto ml-2 text-sm">
                                {snippet.channelTitle}
                            </p>
                        </a>
                        <div className="flex">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="m-auto ml-2 text-sm">
                                {moment(snippet.publishedAt).fromNow()}
                            </p>
                        </div>
                    </footer>

                </article>
            </div>
        </>
    );
}

export default VideoCard;