// import { useState } from "react";
// import { registerUser } from "../../API/ajax-helpers";

// export default function Authenticate({ setToken }) {
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [username, setUsername] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [error, setError] = useState(null);

//   const handleClick = async (e) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/auth/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username, 
//           password,
//         }),
//       });
// console.log(response)
//       if (response.ok) {
//         const authent = await response.json();
//         setToken(authent.token);
//         setSuccessMessage(authent.message);
//         console.log(authent);
//       } else {
//         // Handle non-OK response status here (e.g., show an error message)
//         setError(`Authentication failed with status ${response.status}`);
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };
// }

  
