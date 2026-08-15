import React, { useState } from "react";

function AddUser({ onAddUser }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !age || !gender) {
            alert("Please fill in all fields.");
            return;
        }

        const newUser = {
            id: Date.now(),
            name: name,
            age: age,
            gender: gender
        };

        onAddUser(newUser);

        setName("");
        setAge("");
        setGender("");
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">

            <div>
                <label htmlFor="name">Name</label>

                <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />
            </div>

            <div>
                <label htmlFor="age">Age</label>

                <input
                    type="number"
                    id="age"
                    placeholder="Enter age"
                    value={age}
                    onChange={(event) =>
                        setAge(event.target.value)
                    }
                />
            </div>

            <div>
                <label htmlFor="gender">Gender</label>

                <select
                    id="gender"
                    value={gender}
                    onChange={(event) =>
                        setGender(event.target.value)
                    }
                >
                    <option value="">
                        Select Gender
                    </option>

                    <option value="Male">
                        Male
                    </option>

                    <option value="Female">
                        Female
                    </option>

                    <option value="Other">
                        Other
                    </option>
                </select>
            </div>

            <button type="submit">
                Add User
            </button>

        </form>
    );
}

export default AddUser;