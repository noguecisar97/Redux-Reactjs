import React from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoPlayer from './components/videoPlayer';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </div>
  );
}

export default App;
