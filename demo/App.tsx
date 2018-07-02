import * as React from 'react';
import '../styles/index.scss';
import HelloWorld from '../src';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="hello">
        <HelloWorld name="Demo" />
      </div>
    );
  }
}

export default App;
