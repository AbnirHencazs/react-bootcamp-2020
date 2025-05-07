import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import useGapi from '../../hooks/useGapi';
import { useGlobals } from '../../state/GlobalProvider';
import ReactLoading from 'react-loading';

function HomePage() {
  const { searchQuery } = useGlobals();
  const { videos, isLoading } = useGapi(searchQuery ? searchQuery : '', null);
  const history = useHistory();
  const handleClick = (video) => {
    history.push(`/video/${video.id.videoId}`);
  };

  return (
    <>
      <NavBar />
      <div className="dark:bg-gray-800">
        {!isLoading ? (
          <VideoCardList handleClick={handleClick} videos={videos} channel={videos[0]} />
        ) : (
          <ReactLoading type="spin" color="#9BDAF1" height={300} width={200} />
        )}
      </div>
    </>
  );
}

export default HomePage;
