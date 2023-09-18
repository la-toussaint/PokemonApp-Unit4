import React, { useState } from "react";
// import Authenticate from "./components/SignUp-RegComps/Authenticate";
import SignUpForm from "./components/SignUp-RegComps/SignUpForm";
import VerificationPage from "./components/LogInComps/Verification";
import NavBar from "./components/navbar";
import AllCards from "./components/AllCards";
import { Messages } from "./components/Messages";
import { fetchProfile } from "./API/ajax-helpers";
import { setProfile } from "./components/redux/index"
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NewPost from "./components/NewPost";
import SingleProfile from "./components/SingleProfile";
// @reduxjs/toolkit
import "./index.css";
;

export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const [token, setToken] = useState("");

  console.log("profile: ", profile);
  const [user, setUser] = React.useState([
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
  ]);

  const [message, setMessage] = React.useState(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isLoggedIn) {
      fetchProfile(token).then((data) => {
        dispatch(setProfile(data));
      });
    }
  }, [isLoggedIn]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AllCards />
              {message && <Messages message={message} onClose={setMessage} />}
            </>
          }
        />
        <Route path="/new-post-form" element={<NewPost token={token}/>} />
        {/* </AuthRoute> */}
        <Route path="/all-cards" element={<AllCards />} />
        {/* <Route path="/users/:userId" element={<RenderSelectedUser users={users} />} /> */}
        <Route
          path="/login"
          element={<VerificationPage setToken={setToken} setMessage={setMessage} />}
        />
        <Route path="/register" element={<SignUpForm setToken={setToken} user={user} />} />
        <Route path="/user-profile" element={<SingleProfile token={token}/>} />
      </Routes>
    </>
  );
}
