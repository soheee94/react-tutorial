import React from 'react';
import axios from 'axios';
import Userasync from './Userasync';

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  return response.data;
}

function User({ id }) {
  const [state] = Userasync(() => getUser(id), [id]);
  const { loading, data: user, error } = state;

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
