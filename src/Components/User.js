import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem, Button } from "reactstrap";
import PropTypes from "prop-types";
import { useUser } from "../Contexts/UserContext";
import { userActions } from "../Constants/Actions";
import { userActionsPaths } from "../Constants/Paths";

export const User = (props) => {
  const [, setUsers] = useUser();

  return (
    <ListGroupItem className={"d-flex mt-1"}>
      <strong>{props.name}</strong>
      <div className="ml-auto">
        <Link
          to={userActionsPaths.EDIT_USER + `/${props.id}`}
          className={"btn btn-warning mr-1"}
        >
          Edit
        </Link>
        <Button
          onClick={() =>
            setUsers({
              type: userActions.DELETE_USER,
              payload: props.id,
            })
          }
          color={"danger"}
        >
          Delete
        </Button>
      </div>
    </ListGroupItem>
  );
};

User.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
