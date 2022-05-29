import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}) {
    return (
        <div>
            {/*배열에 key가없다면 내장 파라미터 index사용*/}
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}

            {/*{users.map((user, index) => (*/}
            {/*    <User user={user} key={index} />*/}
            {/*))}*/}
        </div>
    );
}

export default UserList;