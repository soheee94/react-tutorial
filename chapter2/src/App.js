import React from 'react';
import './App.scss';
import Button from './component/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
