import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GLobalStyle = createGlobalStyle`
  body{
    width: 100%;
    height : 100vh;
    background : #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;

function App() {
  return (
    <>
      <GLobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
