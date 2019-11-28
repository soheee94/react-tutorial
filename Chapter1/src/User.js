import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function User({ user }){
    // if(!user) return null;
    return (
            <div>
                <p><b>ID</b>: {user.id}</p>
                <p><b>Username</b>: {user.name}</p>
            </div>
    )
}

export default User;