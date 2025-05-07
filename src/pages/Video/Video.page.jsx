import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import { useParams } from 'react-router-dom';
import useGapi from '../../hooks/useGapi';
import RelatedVideos from '../../components/RelatedVideos';
import Navbar from '../../components/Navbar';

const VideoPage = () => {
  const { videoId } = useParams();
  const { video, isLoading } = useGapi('', videoId, false);
  return (
    <>
      <Navbar />
      <div className="flex h-screen pt-5 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row w-full h-4/5">
          <VideoPlayer isLoading={isLoading} video={video} videoId={videoId} />

          <div>
            <span>
              Google removed support for fetching related videos through a
              `relatedVideoId`.
            </span>
            <a
              className="underline ml-2"
              href="https://developers.google.com/youtube/v3/revision_history?hl=es-419#august-7,-2023"
            >
              Official Announment
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
