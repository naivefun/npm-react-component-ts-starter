import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

declare const module: any;

const rootEl = document.getElementById('app');

ReactDOM.render(
  <App />,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl,
    );
  });
}
