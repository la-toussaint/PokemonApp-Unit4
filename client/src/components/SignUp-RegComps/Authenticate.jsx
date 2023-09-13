import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);


  async function handleClick() {
    try {
      const response = await fetch(BASE_URL_USER_ME,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ); 
        const result = await response.json();
        setSuccessMessage(result.message);
        console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div>
      <h2>Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick} disabled={!token}>Authenticate Token!</button>
    </div>


  );
}