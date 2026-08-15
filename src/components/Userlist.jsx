import React from "react";
import UserCard from "./UserCard";

function Userlist({ users }) {
  return (
    <div className="user-list">
      {users.length === 0 ? (
        <p className="no-users">No contact cards added yet.</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            age={user.age}
            gender={user.gender}
          />
        ))
      )}
    </div>
  );
}

export default Userlist;
