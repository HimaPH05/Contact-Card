import "./App.css";
import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/Userlist";
import "./App.css";

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const addUser = (user) => {
    const updatedUsers = [...users, user];

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="app">
      <h1>Contact Cards</h1>

      <AddUser onAddUser={addUser} />

      <UserList users={users} />
    </div>
  );
}

export default App;
