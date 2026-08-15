import React from "react";
import male from "../Assests/male.png";
import female from "../Assests/female.png";

const UserCard = ({ user }) => {
  return (
    <div className="d-flex">
      {user.gender === "male" ? (
        <img src={male} className="img bg-dark me-5" alt="Male" />
      ) : (
        <img src={female} className="img bg-dark me-5" alt="Female" />
      )}

      <div className="user-details mt-2">
        <h3>{user.username}</h3>

        <h6>
          {user.age} <span>({user.gender})</span>
        </h6>
      </div>
    </div>
  );
};

export default UserCard;
