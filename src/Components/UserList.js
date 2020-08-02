import React from "react";
import { ListGroup } from "reactstrap";
import { User } from "./User";
import { useUser } from "../Contexts/UserContext";

export const UserList = () => {
  const [users] = useUser();

  return (
    <ListGroup className={"mt-2"}>
      {users.users.map((user) => (
        <User key={user.id} name={user.name} id={user.id} />
      ))}
    </ListGroup>
  );
};
