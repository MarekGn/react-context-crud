import React, { createContext, useReducer } from "react";
import { userActions } from "../Constants/Actions";

// Initial State
const initialState = {
  users: [],
};

const UserStateContext = createContext(initialState);
const UserDispatchContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case userActions.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case userActions.ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case userActions.EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.payload.id ? action.payload : user;
        }),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("UserStateContext must be used within a UserProvider");
  }
  return context;
};

const useUserDispatch = () => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("UserDispatchContext must be used within a UserProvider");
  }
  return context;
};

const useUser = () => {
  return [useUserState(), useUserDispatch()];
};

export { UserProvider, useUser };
