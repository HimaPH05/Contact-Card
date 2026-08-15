import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div
        className={
          user.gender === "male" ? "avatar avatar-male" : "avatar avatar-female"
        }
      >
        <div className="avatar-head"></div>
        <div className="avatar-body"></div>
      </div>

      <div className="user-details">
        <h3>{user.username}</h3>

        <p>Age: {user.age}</p>

        <p>Gender: {user.gender}</p>
      </div>
    </div>
  );
};

export default UserCard;
