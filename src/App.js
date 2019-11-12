import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }
  
  const [users, setUsers] = useState([
    {
        id:1,
        username: 'sohee1',
        email: 'hsh8616@naver.com',
        active: true
    },
    {
        id:2,
        username: 'sohee2',
        email: 'hsh8616@gmail.com',
        active: false
    },
    {
        id:3,
        username: 'sohee3',
        email: 'hsh8616@hanmail.com',
        active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email,
    }
    setInputs({
      username : '',
      email : ''
    })
    setUsers([
      ...users,
      user
    ])
    // setUsers(users.concat(user))
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active} //불변성 유지
        : user 
    ))
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
    
  );
}

// 배열 수정(map) 추가(concat) 제거(filter) 

export default App;
