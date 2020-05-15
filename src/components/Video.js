import React from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

function Video(props) {
  return (
    <div className='flex-item'>
      <ReactPlayer url={props.url} controls={true} />
    </div>
  );
}

export default Video;
