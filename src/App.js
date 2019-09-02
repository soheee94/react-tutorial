import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
        id:1,
        username: 'sohee1',
        email: 'hsh8616@naver.com'
    },
    {
        id:2,
        username: 'sohee2',
        email: 'hsh8616@gmail.com'
    },
    {
        id:3,
        username: 'sohee3',
        email: 'hsh8616@hanmail.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); //4
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;
