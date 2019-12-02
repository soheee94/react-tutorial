import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import CheckBox from './component/CheckBox';
import Button from './component/Button';
import Dialog from './component/Dialog';

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
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };
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
          <Button size="large" onClick={onClick}>
            삭제
          </Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="pink">
            BUTTON
          </Button>
        </ButtonGroup>
        {/* <ButtonGroup>
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
        </ButtonGroup> */}
      </AppBlock>

      <Dialog
        title="정말 삭제할꺼야?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={dialog}
      >
        진짜루???
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
