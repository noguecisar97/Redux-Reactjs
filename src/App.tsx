import React from 'react';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoPlayer from './components/videoPlayer';

function App() {
  return (
    <div>
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </div>
  );
}

export default App;
