import React from 'react';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoPlayer from './components/videoPlayer';
import { Container} from './styledApp'

function App() {
  return (
    <Container>
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </Container>
  );
}

export default App;
