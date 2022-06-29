import React, {useEffect} from 'react';

function User({ user, onRemove, onToggle }) {
    useEffect(()=>{
        console.log(user);
    });
    return (
        <div>
            <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
            onClick={()=> onToggle(user.id)}
            >
                {user.username}
            </b>

            <span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {/*배열에 key가없다면 내장 파라미터 index사용*/}
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}

            {/*{users.map((user, index) => (*/}
            {/*    <User user={user} key={index} />*/}
            {/*))}*/}
        </div>
    );
}

export default UserList;