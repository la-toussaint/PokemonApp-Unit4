import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

/*
Signed in
 - Profile (nav item)
  - all my posts => create, update, delete
  - messages to/from me
*/
export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/all-cards">Home</Link>
      <Link to="/all-cards">All Posts</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>

      <Link to="/user-profile">Profile</Link>
      

      <Link to="/new-post-form">New Post</Link>
    </div>
  );
}