import React from 'react';
import NavBar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import {items} from '../../youtube-videos-mock'

function HomePage() {
  return (
    <>
      <NavBar />
      <VideoCardList
        videos={items}
        channel={items[0]} />
    </>
  );
}

export default HomePage;
