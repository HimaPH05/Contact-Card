import React, { useState } from "react";

const AddUser = ({ setUserDetails }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      alert("Username cannot be empty.");
      return;
    }

    if (+age < 1) {
      alert("Age cannot be 0, negative or empty.");
      return;
    }

    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    alert("Contact card has been added successfully!");

    setUserDetails((prevUser) => [
      ...prevUser,
      {
        id: Date.now(),
        username: name,
        age: age,
        gender: gender,
      },
    ]);

    setName("");
    setAge("");
    setGender("");
  };

  return (
    <div className="add-user-box">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="username">Name</label>

          <input
            type="text"
            id="username"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>

          <input
            type="number"
            id="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            placeholder="Enter age"
          />
        </div>

        <div className="gender-title">Gender</div>

        <div className="form-check">
          <input
            type="radio"
            name="gender"
            id="male-radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />

          <label htmlFor="male-radio">Male</label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            name="gender"
            id="female-radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />

          <label htmlFor="female-radio">Female</label>
        </div>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddUser;
