import React, { Component } from 'react';
import ViewerTemplate from './ViewerTemplate';
import SpaceNavigatorContainer from 'containers/SpaceNavigatorContainer';
import ViewerContainer from 'containers/ViewerContainer';

class App extends Component {
  render() {
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigatorContainer/>}
        viewer={(
          <ViewerContainer/>
        )}
      />
    );
  }
}

export default App;