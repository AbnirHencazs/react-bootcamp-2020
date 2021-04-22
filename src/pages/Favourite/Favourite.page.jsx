import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import { useGlobals } from '../../state/GlobalProvider';

const FavouritePage = () => {
  const { favourites } = useGlobals();
  const history = useHistory()
  const handleClick = (video) => {
    history.push(`/favourite/${video.id}`)
  }

  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-800">
        {favourites ? (
          <VideoCardList 
            videos={favourites} 
            channel={favourites[0]}
            handleClick={handleClick} />
        ) : (
          <p>Aún no tienes videos favoritos, agrega uno!</p>
        )}
      </div>
    </>
  );
};

export default FavouritePage;
