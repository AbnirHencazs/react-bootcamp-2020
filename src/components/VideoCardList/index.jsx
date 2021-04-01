import React from 'react';
import VideoCard from '../VideoCard';
import { Link } from 'react-router-dom'

const VideoCardList = ({videos, channel}) => {
  
  return (
    <div className="container my-12 mx-auto px-4 md:px-12" data-testid="VideoCardList">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {videos
          .filter(
            (video) =>
              // Exclude first item since its channel info
              !video.id.channelId
          )
          .map((video) => (
            // render Video list
            <Link
              to="/video"
              onClick={handleClick}>
              <VideoCard
                key={video.id.videoId}
                snippet={video.snippet}
                channelInfo={channel}
                data-testid="VideoCard"
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default VideoCardList;
