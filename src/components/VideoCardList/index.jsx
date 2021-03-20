import React from 'react';
import VideoCard from '../VideoCard';
import mockData from '../../youtube-videos-mock';

const VideoCardList = () => {
  const channelInfo = mockData.items[0];
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {mockData.items
          .filter(
            (video) =>
              // Exclude first item since its channel info
              !video.id.channelId
          )
          .map((video) => (
            // render Video list
            <VideoCard
              key={video.id.videoId}
              snippet={video.snippet}
              channelInfo={channelInfo}
            />
          ))}
      </div>
    </div>
  );
};

export default VideoCardList;
