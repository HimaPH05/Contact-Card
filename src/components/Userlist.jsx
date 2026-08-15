import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    gender={user.gender}
                />
            ))}
        </div>
    );
}

export default Userlist;