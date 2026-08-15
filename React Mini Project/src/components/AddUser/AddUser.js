import React, { useState } from "react";

const AddUser = ({ setUserDetails }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      alert("Username can not be Empty..");
      return;
    }

    if (+age < 1) {
      alert("Age can not be 0, negative or empty.");
      return;
    }

    if (!gender) {
      alert("Please select your gender");
      return;
    }

    alert("Form has been submitted successfully");

    setUserDetails((prevUser) => [
      ...prevUser,
      {
        username: name,
        age: age,
        gender: gender,
      },
    ]);

    setGender("");
    setName("");
    setAge("");
  };

  return (
    <div className="add-user-box w-50 mt-3 mx-auto border border-2 border-dark">
      <form className="p-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName
          </label>

          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age (Year)
          </label>

          <input
            type="number"
            className="form-control"
            id="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            id="male-radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />

          <label className="form-check-label" htmlFor="male-radio">
            Male
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            id="female-radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />

          <label className="form-check-label" htmlFor="female-radio">
            Female
          </label>
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
