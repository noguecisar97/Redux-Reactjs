import React from 'react';
import SearchBar from './components/searchBar/index';
import VideoList from './components/videoList/index';
import VideoPlayer from './components/videoPlayer/index';
import { Container } from './styledApp';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store} >
      <Container>
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </Container>
    </Provider>
  );
}

export default App;
