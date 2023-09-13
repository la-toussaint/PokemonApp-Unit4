import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserListName({ user }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{user.name}</h3>
      <button class="userId"
        onClick={() => {
          navigate(`/${user.id}`);
        }}
      >
        See Details
      </button>
    </div>
  );
}