import React from 'react';
import './App.css';
import { FormattedMessage } from 'react-intl'
import { messages } from './messages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <FormattedMessage {...messages.welcomeHeader} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
