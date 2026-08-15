import React from "react";
import UserCard from "./UserCard.jsx";

const DisplayUsers = ({ userData }) => {
  return (
    <div className="user-list-box">
      <h2>Contact Cards : {userData.length}</h2>

      {userData.map((user) => (
        <div className="user-card-wrapper" key={user.id}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
