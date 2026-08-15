import React from "react";

function UserCard({ name, email, age, gender }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>Gender:</strong> {gender}
      </p>
    </div>
  );
}

export default UserCard;
