import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';

class App extends Component {
  render() {
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator/>}
      />
    );
  }
}

export default App;