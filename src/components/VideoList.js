import React from 'react';
import '../App.css';
import Video from './Video';

const VideoList = (props) => {
  const videos = props.videos;

  return (
    <div>
      {' '}
      <ul className='flex-container'>
        {' '}
        {videos.map((video) => {
          return (
            <div className='flex-item'>
              <Video url={video.url} /> <li>{video.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default VideoList;
