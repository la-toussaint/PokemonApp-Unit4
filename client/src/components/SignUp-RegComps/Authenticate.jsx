import { useState } from "react";

export default function Authenticate({ token, setToken }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async (e) => {
    try {
      const authent = await fetch(
        `http://localhost:8080/api/users/register` / `${(username, password)}`
      );
      setToken(authent.token);
      setSuccessMessage(authent.message);
      console.log(authent);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <h2>Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick} disabled={!token}>
        Authenticate Token!
      </button>
    </div>
  );
}
