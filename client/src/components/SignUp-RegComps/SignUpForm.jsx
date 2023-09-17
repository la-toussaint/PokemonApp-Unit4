import { react, useState } from "react";
import { setToken } from "../redux/index";

const BASE_URL = `http://localhost:8080`;
export const BASE_URL_USER_REG = `${BASE_URL}/api/users/register`;

export default function SignUpForm({ setToken }) {
  const [name, setName] = useState("");
  const [fav_pokemon, setFav_pokemon] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL_USER_REG, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            name,
            username,
            password,
            fav_pokemon,
          },
        }),
      });
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      console.log(hashedPassword);
      const user = await createUser({ username, password: hashedPassword });
      console.log(user);
      delete user.password;

      const token = jwt.sign(user, JWT_COOKIE);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      const data = await response.json();
      console.log("data: ", data);
      setToken(data.token);
      setSuccess(data.message);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form className="sign-up-form" onSubmit={registerUser}>
        <label>
          Name: {""} <br />
          <input
            optional="true"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br />
        </label>
        <label>
          Username: {""} <br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
        </label>
        <label>
          Password: {""} <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
        </label>
        <label>
          Favorite Pokémon: {""} <br />
          <input
            optional="true"
            value={fav_pokemon}
            onChange={(e) => setFav_pokemon(e.target.value)}
          />{" "}
          <br />
        </label>
        <br />
        <button className="signup-click" type="submit">
          Submit
        </button>
      </form>
      {!(username.length >= 8) && (
        <p style={{ color: "white", backgroundColor: "#0072b5" }}>
          No more than an 8-character password please.
        </p>
      )}
    </>
  );
}
