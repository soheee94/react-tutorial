import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';
// import axios from 'axios';
// import Userasync from './Userasync';
// import { useAsync } from 'react-async';

// async function getUser({ id }) {
//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/${id}`,
//   );

//   return response.data;
// }

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  // const { isLoading, data: user, error } = useAsync({
  //   promiseFn: getUser,
  //   id,
  //   watch: id,
  // });

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { loading, data: user, error } = state.user;

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
