import React, { useEffect } from 'react';
function User({user, onRemove, onToggle}){
    const {username, email, id, active} = user;
    useEffect(() => {
        // user값이 바뀔 때 마다 실행
        console.log('user값이 설정됨');
        console.log(user);
        return () => {
            console.log('user값이 바뀌기 전');
            console.log(user);
        }
    }, [user])
    // useEffect(() => {
    //     // 마운트
    //     // props -> state
    //     // API
    //     // D3, Video.js
    //     // setInterval, setTimeout
    //     // 나타나고 나서라서 DOM에 접근 가능
    //     console.log('내 눈 앞에 나타나');
    //     // 언마운트
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
            onClick={() => onToggle(id)}>{username}</b> <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }){
    return(
        <div>
            {
                users.map(
                    user => (
                    <User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove} 
                        onToggle={onToggle}
                    />)
                )
            }
        </div>
    )
}

export default UserList;