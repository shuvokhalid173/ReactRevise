import React, { useState } from "react";
import Button from "./Button";
import Test from "./Test";

export default function UserForm(props) {
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState({
        name: true,
        age: true,
    });
    const [errorMsg, setErrorMsg] = useState({
        name: "",
        age: "",
    });

    const inputStatus = (field, value) => {
        let is_valid = !!value;
        let error_msg = value ? "" : `${field} is required`;

        if (field == "age") {
            if (value && value < 18) {
                is_valid = false;
                error_msg = "Age should be more than 18 years";
            }
        }

        isValid[field] = is_valid;
        errorMsg[field] = error_msg;

        setIsValid(isValid);
        setErrorMsg(errorMsg);
    };

    const addUser = () => {
        console.log({
            name,
            age,
        });
    };

    const handleAge = (event) => {
        inputStatus("age", event.target.value);
        setAge(event.target.value);
    };

    const handleName = (event) => {
        inputStatus("name", event.target.value);
        setName(event.target.value);
    };

    return (
        <div style={{ width: "50%" }}>
            <div className="form-group">
                <label>User name</label>
                <input
                    className="form-control"
                    type={"text"}
                    onChange={handleName}
                    style={{ borderColor: !isValid.name ? "red" : "" }}
                    value={name}
                />
                <span style={{ color: "red" }}>{errorMsg.name}</span>
            </div>

            <div className="form-group">
                <label>Age</label>
                <input
                    className="form-control"
                    type={"number"}
                    onChange={handleAge}
                    value={age}
                    style={{ borderColor: !isValid.age ? "red" : "" }}
                />
                <span style={{ color: "red" }}>{errorMsg.age}</span>
            </div>

            <Button onClick={addUser}>Add</Button>
            <Test />
        </div>
    );
}
