import "./styles.css";
import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

export default function App() {
  const [UserDetails, setUserDetails] = useState([
    {
      id: 1,
      username: "Renuka",
      age: "20",
      gender: "female",
    },
    {
      id: 2,
      username: "Vyshnavi",
      age: "20",
      gender: "female",
    },
    {
      id: 3,
      username: "Suresh",
      age: "23",
      gender: "male",
    },
  ]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Friends Directory</h1>

      <AddUser setUserDetails={setUserDetails} />

      <UserList userData={UserDetails} />
    </div>
  );
}
