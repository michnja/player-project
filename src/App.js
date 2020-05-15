import React, { Fragment } from 'react';
import VideoList from './components/VideoList';
import './App.css';
import Navbar from './components/Navbar';
import VideoPage from './VideoPage';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log('joł');
    return <VideoPage />;
  }

  render() {
    return (
      <Fragment>
        <Navbar />

        <div id='section1'>
          <div className='banner-img'></div>
          <div className='banner-text'>
            <h1> top 5 </h1>
            <p> Videos you have to see </p>
            <a href='#section2'> Click to watch</a>
          </div>
        </div>
        <div id='section2'>
          <VideoPage />
          <a className='link-to-up' href='#section1'>
            Click Me to back
          </a>
        </div>
      </Fragment>
    );
  }
}

export default App;
// <VideoList videos={this.state.videoData} />
