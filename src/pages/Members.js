import React from "react";
import { Link, Outlet } from "react-router-dom";

function Members() {
  return (
    <div>
      <h1>Members page</h1>
      <p>select a member to show</p>
      <Link to="Jhon Doe">Jhon Doe</Link> |{" "}
      <Link to="Doe Jhon">Doe Jhon</Link>
      <Outlet />
    </div>
  );
}

export default Members;
