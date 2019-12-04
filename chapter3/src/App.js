import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoCreate from './components/TodoCreate';

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
        <TodoList>
          <TodoItem done={false} text="하이 첫번째"></TodoItem>
          <TodoItem done={true} text="하이 두번째"></TodoItem>
        </TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </>
  );
}

export default App;
