import { useState } from "react";
import {
  Grid,
  Paper,
  Link,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setProfile, setToken } from "../redux/index";
import { login } from "../../API/ajax-helpers";

export default function VerificationPage({ message, setMessage }) {
  const nav = useNavigate();
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

  const handleSubmit = async (e, token, profile) => {
    e.preventDefault();
    console.log("makin request");
    console.log("username", username);
    console.log("password", password);
    const register = await login(username, password);

    console.log(register);
    setUsername("");
    setPassword("");
    setToken(token);
    setProfile(profile);
    nav("/new-post-form");
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
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
}
