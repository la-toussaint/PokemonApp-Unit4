import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux";

/*
Signed in
 - Profile (nav item)
  - all my posts => create, update, delete
  - messages to/from me
*/
export default function NavBar() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch()
console.log('token: ', token);
  return (
    <div className="nav">
      <Link to="/all-cards">Home</Link>
      <Link to="/all-cards">All Posts</Link>
      {!Boolean(token) && <Link to="/register">Register</Link>}
      {!Boolean(token) && <Link to="/login">Log In</Link>}
      {Boolean(token) && <button  onClick={() => {
        dispatch(setToken(null))
        dispatch(setProfile(null))
      }}>Log out</button>}
      <Link to="/user-profile">Profile</Link>
      <Link to="/new-post-form">New Post</Link>
    </div>
  );
}