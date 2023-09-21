import React, { useState } from "react";
import {
  Grid,
  Paper,
  Link,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/index";
import { setProfile } from "../redux/index";

const VerificationPage = ({ message, setMessage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fav_pokemon, setFav_pokemon] = useState("");
  const [name, setName] = useState("");

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
  margin: "50px auto",
};
  const btnstyle = { margin: "8px 0" };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
      });
      const {token, user} = await response.json()

      dispatch(setToken(token));
      dispatch(setProfile(user))

      setMessage({ text: 'Login successful!', type: "success" });
      navigate("/");
    } catch (error) {
      setMessage({ text: message, type: "error" });
    }
  };

  return (
    <Grid>
      <Paper className="login-paper" elevation={10} style={paperStyle}>
        <Grid className="login-grid" align="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Name"
          placeholder="Enter your name"
          fullWidth
          optional="true"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          label="Favorite Pokémon"
          placeholder="Enter Pokémon name"
          fullWidth
          optional="true"
          value={fav_pokemon}
          onChange={(e) => setFav_pokemon(e.target.value)}
        />
        <Button
          className="login-click"
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