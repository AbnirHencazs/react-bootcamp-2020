import React from 'react';
import NavBar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import useGapi from '../../hooks/useGapi';
import { useGlobals } from '../../state/GlobalProvider';

function HomePage() {
  
  const { searchQuery } = useGlobals();
  const { videos } = useGapi( searchQuery ? searchQuery : "", null)

  return (
    <>
      <NavBar/>
      <div className="dark:bg-gray-800">
        <VideoCardList
          videos={videos}
          channel={videos[0]} />
      </div>
    </>
  );
}

export default HomePage;
