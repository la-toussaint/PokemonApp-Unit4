import { react, useState } from "react";
import { setProfile, setToken } from "../redux/index";
import { registerUsers } from "../../API/ajax-helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const BASE_URL = `http://localhost:8080`;
export const BASE_URL_USER_REG = `${BASE_URL}/api/auth/register`;

export default function Register({ setMessage, setToken, setProfile }) {
  const [name, setName] = useState("");
  const [fav_pokemon, setFav_pokemon] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const register = await registerUsers(username, password, name, fav_pokemon);

    if (!Boolean(register?.error)) {
      dispatch(setToken(register.token));
      dispatch(setProfile(register.users));
      setUsername(username);
      setPassword(password);
      setMessage(
        message.type, "success",
        message.text, "Success! You have been registered. Thank you for signing up.",
      );
      nav("/new-post-form");
      return;
    }

    setMessage(
      message.type,
      "error",
      message.text,
      `There was an error in the registration process: ${register.error.detail} ` ||
        "Unknown Error Occurred"
    );
  };

  return (
    <>
      <h2 className="sign-up">New User Sign-Up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label>
          Name: <br />
          <input
            placeholder="name - optional"
            optional="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
        </label>
        <label>
          Username: <br />
          <input
            placeholder="username - REQUIRED"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
        </label>
        <label>
          Password:
          <br />
          <input
            placeholder="password - REQUIRED"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </label>
        <label>
          Favorite Pokémon:
          <br />
          <input
            placeholder="favorite pokémon - optional"
            optional="true"
            value={fav_pokemon}
            onChange={(e) => setFav_pokemon(e.target.value)}
          />
          <br />
        </label>
        <br />
        <button className="signup-click" type="submit">
          Submit
        </button>
      </form>
      {!(username.length >= 8) && (
        <p style={{ color: "linen", backgroundColor: "#0072b5" }}>
          No more than an 8-character password please.
        </p>
      )}
    </>
  );
}
