import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CheckBox from './component/CheckBox';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return <Circle color="blue" huge />;
}

export default App;
