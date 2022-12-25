import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Taous Khoudour",
      image: "https://via.placeholder.com/150",
      places: 3,
    },
    {
      id: "u3",
      name: "Mimi",
      image: "https://via.placeholder.com/150",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
