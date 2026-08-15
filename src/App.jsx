import React, { useState } from "react";
import "./styles.css";

import AddUser from "./components/AddUser";
import DisplayUsers from "./components/DisplayUsers";

export default function App() {
  const [UserDetails, setUserDetails] = useState([
    {
      id: 1,
      username: "Hima P H",
      age: "20",
      gender: "female",
    },
  ]);

  return (
    <div className="app">
      <h1>Contact Card</h1>

      <p className="subtitle">Create and manage your contact cards</p>

      <AddUser setUserDetails={setUserDetails} />

      <DisplayUsers userData={UserDetails} />
    </div>
  );
}
