import React, { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar';
import VideoCardList from '../../components/VideoCardList';
import useGapi from '../../hooks/useGapi';

function HomePage() {
  
  const [search, setSearch] = useState("")
  let { videos } = useGapi(search)

  const updateSearch = (childData) => {
    setSearch(childData)
  }

  return (
    <>
      <NavBar
        callBack={updateSearch} />
      <VideoCardList
        videos={videos}
        channel={videos[0]} />
    </>
  );
}

export default HomePage;
