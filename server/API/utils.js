const client = require("../db/client");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");

const authRequired = (req, res, next) => {
	console.log(req.headers) 
	const token = req.headers.token;
  
  console.log("Cookie Token:", token);
  try {
    jwt.verify(token, JWT_SECRET);
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You are def not authorized.",
    });
    return;
  }
  next();
};

// function requireUser(req, res, next) {
//   if (!req.user) {
//     res.status(401);
//     next({
//       name: "MissingUserError",
//       message: "You must be logged in to perform this action",
//     });
//   }

//   next();
// }

// // takes required parameters as an array, returns a middleware function that sends back a message if they're not present
// const requiredNotSent = ({ requiredParams, atLeastOne = false }) => {
//   return (req, res, next) => {
//     // for operations that need at least one param. Not all required.
//     if (atLeastOne) {
//       let numParamsFound = 0;
//       for (let param of requiredParams) {
//         if (req.body[param] !== undefined) {
//           numParamsFound++;
//         }
//       }
//       if (!numParamsFound) {
//         next({
//           name: "MissingParams",
//           message: `Must provide at least one of these in body: ${requiredParams.join(
//             ", "
//           )}`,
//         });
//       } else {
//         next();
//       }
//     } else {
//       // figure out which ones are not defined, and return them
//       const notSent = [];
//       for (let param of requiredParams) {
//         if (req.body[param] === undefined) {
//           notSent.push(param);
//         }
//       }
//       if (notSent.length)
//         next({
//           name: "MissingParams",
//           message: `Required Parameters not sent in body: ${notSent.join(
//             ", "
//           )}`,
//         });
//       next();
//     }
//   };
// };

// async function checkPokemonExists(pokedata_id, pokename) {
//   try {
//     const {
//       rows: [pokedata],
//     } = await client.query(
//       `
//       SELECT *
//       FROM pokedata
//       WHERE pokedata_id=$1
//       AND pokename=$2
//     `,

//     );

//     return pokedata;
//   } catch (error) {
//     throw error;
//   }
// }

module.exports = {
  authRequired,
  //  requireUser,
  //  requiredNotSent,
  //  checkPokemonExists,
};
