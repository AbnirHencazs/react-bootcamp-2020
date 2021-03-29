import React, { useEffect } from 'react';
import NavBar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import useGapi from '../../hooks/useGapi';

function HomePage() {
  const {videos, getVideos} = useGapi("/videos")

  useEffect( () => {
    getVideos()
  }, [])

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
