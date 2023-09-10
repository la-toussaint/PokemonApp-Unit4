import React, { useState } from "react";
import {
  Grid,
  Paper,
  Link,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { BASE_URL_LOGIN } from "../../API";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux";
const VerificationPage = ({ setMessage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const data = await response.json();
      dispatch(setToken(data.data.token));
      setMessage({ text: data.data.message, type: "success" });
      navigate("/");
    } catch (error) {
      setMessage({ text: data.data.message, type: "error" });
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={loginUser}
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};

export default VerificationPage;
