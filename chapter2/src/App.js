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

      <div className="buttons">
        <Button size="large" color="gray" outline>
          BUTTON
        </Button>
        <Button outline>BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" color="gray" outline fullWidth>
          BUTTON
        </Button>
        <Button outline fullWidth>
          BUTTON
        </Button>
        <Button
          size="small"
          color="pink"
          fullWidth
          onClick={() => {
            console.log('클릭!');
          }}
          onMouseMove={() => {
            console.log('마우스무브!');
          }}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
