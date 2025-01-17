import React from 'react';
import VideoCard from '../VideoCard';
import { useHistory } from 'react-router-dom'

const VideoCardList = ({videos, channel}) => {

  const history = useHistory()

  const handleClick = (video) => {
    history.push(`/video/${video.id.videoId}`)
  }

  return (
    <div className="container py-12 mx-auto px-4 md:px-12" data-testid="VideoCardList">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {videos
          .filter(
            (video) =>
              // Exclude first item since its channel info
              !video.id.channelId
          )
          .map((video) => (
            // render Video list
              <VideoCard
                handleClick={() => handleClick(video)}
                key={video.id.videoId}
                snippet={video.snippet}
                channelInfo={channel}
                data-testid="VideoCard"
              />
          ))}
      </div>
    </div>
  );
};

export default VideoCardList;
