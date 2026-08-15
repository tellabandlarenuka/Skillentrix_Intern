import React from "react";

import UserCard from "../UserCard/UserCard";

const UserList = ({ userData }) => {
  return (
    <div className="user-list-box w-50 mt-3 mx-auto border border-2 border-dark">
      <h4 style={{ textAlign: "center" }}>
        Number Of Users : {userData.length}
      </h4>

      <div className="mt-2">
        <ul className="p-2 list-group" style={{ listStyleType: "none" }}>
          {userData.map((user, index) => (
            <li key={index} className="list-group-item mb-2 p-1">
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
