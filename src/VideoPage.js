import React, { Fragment } from 'react';
import VideoList from './components/VideoList';
import './App.css';
import Navbar from './components/Navbar';

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
    };
  }

  componentDidMount() {
    fetch('database.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ videoData: data });
      });
  }
  render() {
    return <VideoList videos={this.state.videoData} />;
  }
}

export default VideoPage;
