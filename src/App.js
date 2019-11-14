import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }, [inputs])
  
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

  const onCreate = useCallback(() => {
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
  },[username, email, users])

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  },[users])

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active} //불변성 유지
        : user 
    ))
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </>
    
  );
}

// 배열 수정(map) 추가(concat) 제거(filter) 

export default App;
