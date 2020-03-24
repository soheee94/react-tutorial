// n 밀리세컨동안 기다리는 프로미스 함수
// const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// const posts = [
//   {
//     id: 1,
//     title: '테스트',
//     body: '이거는 테스트 1번이에요',
//   },
//   {
//     id: 2,
//     title: '테스트2',
//     body: '이거는 테스트 2번이에요',
//   },
//   {
//     id: 3,
//     title: '테스트',
//     body: '이거는 테스트 3번이에요',
//   },
// ];

// export const getPosts = async () => {
//   await sleep(500);
//   return posts;
// };

// export const getPostById = async id => {
//   await sleep(500);
//   return posts.find(post => post.id === id);
// };

import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const getPostById = async id => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
