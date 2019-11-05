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
    setUsers(users.filter())
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} />
    </>
    
  );
}

export default App;
