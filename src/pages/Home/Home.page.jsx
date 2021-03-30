import React, { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import useGapi from '../../hooks/useGapi';

function HomePage() {
  
  const {videos, getVideos, client} = useGapi('')

  useEffect( () => {
    if( client === undefined ) return;
    getVideos()
  }, [client])

  return (
    <>
      <NavBar />
      <VideoCardList
        videos={videos}
        channel={videos[0]} />
    </>
  );
}

export default HomePage;
