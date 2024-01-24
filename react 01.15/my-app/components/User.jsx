import { userList } from "@/data/userList";
import React, { useState } from "react";

export default function User() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex(index + 1);
  };
  let user = userList[index];
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Next
      </button>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No more users</p>
      )}
    </>
  );
}
