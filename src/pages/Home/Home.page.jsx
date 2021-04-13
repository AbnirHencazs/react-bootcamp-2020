import React from 'react';
import NavBar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import useGapi from '../../hooks/useGapi';
import { useParams } from 'react-router-dom';
import { useGlobals } from '../../state/GlobalProvider';

function HomePage() {
  
  const { searchQuery } = useGlobals();
  const { videos } = useGapi( searchQuery ? searchQuery : "", null)

  return (
    <>
      <NavBar/>
      <VideoCardList
        videos={videos}
        channel={videos[0]} />
    </>
  );
}

export default HomePage;
