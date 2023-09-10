import { useState } from "react";
const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const BASE_URL_USER_ME = `${BASE_URL}/users/me`;

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