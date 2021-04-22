import React from 'react';
import Navbar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import { useGlobals } from '../../state/GlobalProvider';

const FavouritePage = () => {
  const { favourites } = useGlobals();
  console.log(favourites);

  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-800">
        {favourites ? (
          <VideoCardList videos={favourites} channel={favourites[0]} />
        ) : (
          <p>Aún no tienes videos favoritos, agrega uno!</p>
        )}
      </div>
    </>
  );
};

export default FavouritePage;
