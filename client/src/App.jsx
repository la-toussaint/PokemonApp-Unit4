import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SignUpForm from "./components/SignUp-RegComps/SignUpForm";
import VerificationPage from "./components/LogInComps/Verification";
import NewPost from "./components/NewPost";
import SingleProfile from "./components/SingleProfile";
import NavBar from "./components/navbar";
import AllCards from "./components/AllCards";
import "./index.css";
import { Messages } from "./components/Messages";
import { fetchProfile, testAuth } from "./API/ajax-helpers";
import { setToken, setProfile } from "./components/redux/index";
import { Routes, Route } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Log the isLoggedIn variable
  console.log("isLoggedIn:", isLoggedIn);

  if (!isLoggedIn) {
    return (
      <div style={{ marginTop: "10em", backgroundColor: "red" }}>
        You Are Not Authorized To View This Route
      </div>
    );
  }

  // Render the protected content (children) if the user is authenticated
  return <>{children}</>;
};

export default function App(users, username, password, result, isLoggedIn) {
  console.log("users: ", users, username, password);
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isLoggedIn) {
      testAuth(token).then((result) =>
        console.log("user is authorized", result)
      );
      //   fetchProfile(token)(dispatch).then((data) => {
      //    (setProfile(data));
    }
  }, [isLoggedIn, token]);

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
        {/* </AuthRoute> */}
        <Route
          path="/new-post-form"
          element={
            <AuthRoute token={token}>
              <NewPost />
            </AuthRoute>
          }
        />
        {/* </AuthRoute> */}

        <Route path="/all-cards" element={<AllCards />} />
        {/* <Route path="/users/:userId" element={<RenderSelectedUser users={users} />} /> */}
        <Route
          path="/login"
          element={
            <VerificationPage
              setMessage={setMessage}
              setToken={setToken}
              setProfile={setProfile}
            />
          }
        />
        <Route
          path="/register"
          element={
            <SignUpForm
              users={users}
              setToken={setToken}
              setProfile={setProfile}
            />
          }
        />
        <Route
          path="/users-profile"
          element={<SingleProfile users={users} token={token} />}
        />
      </Routes>
      {message && <Messages message={message} onClose={setMessage} />}
    </>
  );
}
