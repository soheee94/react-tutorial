import React, { useState, useContext } from 'react';
import User from './User';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';

function Users() {
  const [userId, setUserId] = useState(null);

  const state = useUsersState();
  console.log(state);
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중!</div>;
  if (error) return <div>에러 발생!</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.name}({user.username})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
