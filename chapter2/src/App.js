import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import CheckBox from './component/CheckBox';
import Button from './component/Button';

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${props => props.color || 'black'};
//   border-radius: 50%;
//   ${props =>
//     props.huge &&
//     css`
//       width: 10rem;
//       height: 10rem;
//     `}
// `;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: 'blue',
          gray: 'gray',
          pink: 'pink',
        },
      }}
    >
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="pink">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>
            BUTTON
          </Button>
          <Button color="gray" outline>
            BUTTON
          </Button>
          <Button size="small" color="pink" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button color="gray" size="large" fullWidth>
            BUTTON
          </Button>
          <Button size="small" color="pink" size="large" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
