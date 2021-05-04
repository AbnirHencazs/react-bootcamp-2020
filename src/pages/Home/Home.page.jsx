import React from 'react';
import { useHistory } from 'react-router';
import NavBar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import useGapi from '../../hooks/useGapi';
import { useGlobals } from '../../state/GlobalProvider';

function HomePage() {
  
  const { searchQuery } = useGlobals();
  const { videos } = useGapi( searchQuery ? searchQuery : "", null)
  const history = useHistory()
  const handleClick = (video) => {
    history.push(`/video/${video.id.videoId}`)
  }
  return (
    <>
      <NavBar/>
      <div className="dark:bg-gray-800">
        <VideoCardList
          handleClick={handleClick}
          videos={videos}
          channel={videos[0]} />
      </div>
    </>
  );
}

export default HomePage;
