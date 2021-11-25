import React, { Component } from 'react';
import Count from './containers/Count';

import People from './containers/People';
import Posts from './containers/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
        </ol>
        <Count />
        <Posts />
        <People />
      </div>
    );
  }
}

export default App;
