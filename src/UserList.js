import React from 'react';
function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}

function UserList(){
    const users = [
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
    ];

    return(
        <div>
            {
                users.map(
                    user => (<User user={user}/>)
                )
            }
        </div>
    )
}

export default UserList;