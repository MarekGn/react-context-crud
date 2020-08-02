import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useUser } from "../../Contexts/UserContext";
import { userActions } from "../../Constants/Actions";

export const ManipulateUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const [, setUsers] = useUser();
  const history = useHistory();

  useEffect(() => {
    setSelectedUser((prevState) => ({
      ...prevState,
      id: props.match.params.id || uuid(),
    }));
  }, [setSelectedUser, props.match.params.id]);

  const onNameChange = (e) => {
    setSelectedUser({ ...selectedUser, name: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUsers({
      type:
        typeof props.match.params.id === "undefined"
          ? userActions.ADD_USER
          : userActions.EDIT_USER,
      payload: selectedUser,
    });
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={selectedUser.name}
          placeholder="Enter Name"
          onChange={onNameChange}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
