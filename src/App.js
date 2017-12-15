import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

class App extends Component {
  render() {
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator/>}
        viewer={(
          <Viewer 
            url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0" 
            mediaType="video"/>
        )}
      />
    );
  }
}

export default App;