import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';
const User = React.memo(function User({user}){
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch)
    useEffect(() => {
        // user값이 바뀔 때 마다 실행
        console.log('user값이 설정됨');
        console.log(user);
        return () => {
            console.log('user값이 바뀌기 전');
            console.log(user);
        }
    }, [user]);

    // useEffect(() => {
    //     // 마운트
    //     // props -> state
    //     // API
    //     // D3, Video.js
    //     // setInterval, setTimeout
    //     // 나타나고 나서라서 DOM에 접근 가능
    //     console.log('내 눈 앞에 나타나');
    //     // 언마운트
    //     // 업데이트 직전/삭제 직전
    //     return () => {
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //         // 뒷정리
    //         console.log('사라져');
    //     }
    // }, []);
    return(
        <div>
            <b style={{
                color : active ? 'green' : 'black',
                cursor : 'pointer'
            }} 
            onClick={() => dispatch({
                 type : 'TOGGLE_USER',
                 id
                })}>{username}</b> <span>{email}</span>
            <button onClick={() => dispatch({
                type : 'REMOVE_USER',
                id
            })}>삭제</button>
        </div>
    )
})

function UserList({ users }){
    return(
        <div>
            {
                users.map(
                    user => (
                    <User 
                        user={user} 
                        key={user.id} 
                    />)
                )
            }
        </div>
    )
}

export default React.memo(UserList);