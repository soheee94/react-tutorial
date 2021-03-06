import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6b3;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  position: absolute;
  font-size: 60px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  color: white;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: 0.125s all ease-out;

  ${props =>
    props.open &&
    css`
      background: #ff6b6b;

      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }

      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;
  box-sizing: border-box;
`;
const InsertForm = styled.form``;
const Input = styled.input`
  outline: none;
  width: 100%;
  border: 1px solid #dee2e6;
  padding: 12px;
  box-sizing: border-box;
  font-size: 18px;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => {
    setOpen(!open);
  };
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="할 일을 입력하세요!"
              onChange={onChange}
              autoFocus
              value={value}
            ></Input>
          </InsertForm>
        </InsertFormPositioner>
      )}

      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
