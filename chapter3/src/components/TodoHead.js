import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  h1 {
    font-size: 36px;
    color: #343a40;
    margin: 0;
  }

  .day {
    font-size: 24px;
    color: #ced4da;
    margin-top: 4px;
  }

  .task-left {
    color: #20c997;
    font-weight: bold;
    font-size: 18px;
    margin-top: 40px;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2019년 12월 4일</h1>
      <div className="day">수요일</div>
      <div className="task-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
