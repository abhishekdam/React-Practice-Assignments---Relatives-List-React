import React, { Component, useState } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          <li key="relativeListItem1">Suresh</li>
          <li key="relativeListItem2">Suresh</li>
          <li key="relativeListItem3">Suresh</li>
          <li key="relativeListItem4">Suresh</li>
        </ol>
      </div>
    );
  }
}

export default App;
