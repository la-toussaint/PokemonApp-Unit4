import { react, useState } from "react";
// import { setToken } from "../redux/index";
import { registerUser } from "../../API/ajax-helpers";
import { useNavigate } from "react-router-dom";

const BASE_URL = `http://localhost:8080`;
export const BASE_URL_USER_REG = `${BASE_URL}/api/auth/register`;

export default function Register({ token }) {
  const [name, setName] = useState("");
  const [fav_pokemon, setFav_pokemon] = useState("");
  const [username, setUsername] = useState("");
  const [setToken] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (e, token ) => {
    e.preventDefault();
    console.log(username, password);
    const register = await registerUser(username, password);
    setToken(token);
    console.log(register.token);
    setUsername("");
    setPassword("");
    setSuccess(message);
    nav("/posts");
  };

  return (
    <>
      <h2 className="sign-up">Authenticate!</h2>
      {successMessage && <p className="sign-up-success">{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onSubmit={handleSubmit} disabled={!token}>
        Authenticate Token!
      </button>
      <form className="sign-up-form">
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
