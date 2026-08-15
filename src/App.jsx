import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers((previousUsers) => [
            ...previousUsers,
            user
        ]);
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