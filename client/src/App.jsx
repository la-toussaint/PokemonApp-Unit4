import React, { useState } from "react";
// import Authenticate from "./components/SignUp-RegComps/Authenticate";
import SignUpForm from "./components/SignUp-RegComps/SignUpForm";
import VerificationPage from "./components/LogInComps/Verification";
import NavBar from "./components/navbar";
import AllCards from "./components/AllCards";
import { Messages } from "./components/Messages";
import { fetchProfile, testAuth } from "./API/ajax-helpers";
// import  { setProfile } from "./components/redux/index";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NewPost from "./components/NewPost";
import SingleProfile from "./components/SingleProfile";

// @reduxjs/toolkit
import "./index.css";

const AuthRoute = ({ token, user, children }) => {
  if (Boolean(token)) {
    return children.then(data);
  }
  console.log(children, data);
  return (
    <div style={{ marginTop: "10em", backgroundColor: "red" }}>
      You Are Not Authorized To View This Route
    </div>
  );
};

export default function App() {
  //   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  //   const profile = useSelector((state) => state.auth.profile);
  //   const token = useSelector((state) => state.auth.token);

  const [user, setUsers$({user_id, setUser_id}), (name, setName), (username, setUsername), (password, setPassword)) => { 
 
[user_id: 1, name: "Name1", username: "Username1", password: "userRegViaWeb1" ? "hashedPassword1" : "userPassword1"],,
    {
      user_id: 2,
      name: "Name2",
      username: "Username2",
      password: "userRegViaWeb2" ? "hashedPassword2" : "userPassword2",
    },
    {
      user_id: 3,
      name: "Name3",
      username: "Username3",
      password: "userRegViaWeb2" ? "hashedPassword3" : "userPassword3",
    },
]};
  console.log("users: ", user, username, password);
  const [message, setMessage] = React.useState(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isLoggedIn) {
      testAuth(token).then((data) => console.log("user is authorized", data));
      //   fetchProfile(token)(dispatch).then((data) => {
      //    (setProfile(data));
    }
  }, [isLoggedIn]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute token={token}>
              <AllCards />
            </AuthRoute>
          }
        />

        <Route
          path="/new-post-form"
          element={
            <AuthRoute token={token}>
              <NewPost token={token} />
            </AuthRoute>
          }
        />
        {/* </AuthRoute> */}

        <Route path="/all-cards" element={<AllCards />} />
        {/* <Route path="/users/:userId" element={<RenderSelectedUser users={users} />} /> */}
        <Route
          path="/login"
          element={<VerificationPage setMessage={setMessage} />}
        />
        <Route path="/register" element={<SignUpForm user={user} />} />
        <Route path="/user-profile" element={<SingleProfile token={token} />} />
      </Routes>
      {message && <Messages message={message} onClose={setMessage} />}
    </>
  );
}
