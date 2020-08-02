import React from "react";
import { NavigationBar } from "../NavigationBar";
import { UserList } from "../UserList";

export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <UserList />
    </div>
  );
};
