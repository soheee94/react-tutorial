import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
// import useInputs from './useInputs';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중');
  return users.filter(user => user.active).length;
}

const initialState = {
  users : [
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
  ]
}

function reducer(state, action){
  switch(action.type){
    case 'CREATE_USER':
      return{
        inputs : initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return{
        ...state,
        users: state.users.map(user =>
          user.id === action.id
          ? {...user, active: !user.active}
          : user
        )
      }
    case 'REMOVE_USER':
      return{
        ...state,
        users : state.users.filter(user=> user.id !== action.id)
      }
    default :
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);
// 기본값은 필요 없기 때문에 null 사용

function App() {
  // const [{username, email}, onChange, reset] = useInputs({
  //   username:'',
  //   email:''
  // })
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  // const nextId = useRef(4);


  // const onCreate = useCallback(() => {
  //     dispatch({
  //     type : 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   nextId.current += 1;
  //   reset();
  // }, [username, email]);

  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type:'TOGGLE_USER',
  //     id
  //   })
  // }, []);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type:'REMOVE_USER',
  //     id
  //   })
  // }, []);

  const count = useMemo(() => countActiveUsers(users), [users]) 


  return (
    <UserDispatch.Provider value={dispatch}>
      {/* <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/> */}
      <CreateUser/>
      <UserList users={users}/>
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
    
  );
}

// 배열 수정(map) 추가(concat) 제거(filter) 

export default App;
