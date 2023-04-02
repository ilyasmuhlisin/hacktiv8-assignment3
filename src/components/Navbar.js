import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About us</Link> |{" "}
      <Link to="/members">Members</Link> | <Link to="/items">Items</Link> {" "}
    </nav>
  );
}

export default Navbar