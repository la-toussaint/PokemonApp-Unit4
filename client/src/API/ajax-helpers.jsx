import React, { useState, dispatch } from "react";

import {
  BASE_URL_USERS_ME,
  BASE_URL_USERS,
  BASE_URL_POKEDATA,
  BASE_URL_GMAX,
  BASE_URL_POKE_EGG,
  BASE_URL_EGG_GROUP,
  BASE_URL_BREED,
  BASE_URL_DELET,
  BASE_URL_AUTH_REG,
  BASE_URL_AUTH_LOGIN,
} from "./index";

export const testAuth = async (token) => {
  try {
    const response = await fetch(`http://localhost:8080/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: "JSON",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    // Handle non-OK response status here (e.g., show an error message
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`http://localhost:8080/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        users: {
          username,
          password,
        },
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const registerUsers = async (username, password, name, fav_pokemon) => {
  try {
    const response = await fetch(`http://localhost:8080/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        users: {
          username,
          password,
          name,
          fav_pokemon,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    setError(`Authentication failed with status ${response.status}`);
    // Handle non-OK response status here (e.g., show an error message
  }
};
export const fetchAllUsers = async () => {
  try {
    // write a fetch request for:
    // https://fsa-puppy-bowl.herokuapp.com/api/users
    const response = await fetch(`http://localhost:8080/api/users`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }

  // update UserList with the results
};

export const fetchAllPokedata = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/pokedata`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllGmax = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/g_max`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllPoke_egg = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/poketype_egg`);
    const result = await response.json();
    console.log(result.poketype_egg);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllEgg_group = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/egg_group`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllBreed = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/breeding`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProfile = (token) => async (dispatch, setProfile) => {
  try {
    const response = await fetch(`http://localhost:8080/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: "JSON",
    });
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const result = await response.json();
    dispatch(setProfile(result));
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (token, pokedata_id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/pokedata/pokedata_id`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: "JSON",
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default function RenderSelectedUsers({ user_id, token }) {
  const fetchSingleUser = async (user_id, token) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/user_id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: "JSON",
      });
      const selectedUsers = await response.json();
    } catch (error) {
      console.error(error);
    }
    return selectedUsers;
  };
  const usersCard = document.createCard("div");
  usersCard.classList.add("user");
  usersCard.innerHTML = `
  <h4>${users.name}</h4>
  <p>${users.user_id}</p>
  <p>${users.username}</p>
  <p>${users.password}</p>
  <p>${users.fav_pokemon}</p>
  <p>${users.token}</p>
  <p>${users.posts}</p>`;
  usersContainer.appendChild(usersCard);

  const [users, setUsers] = useState({});
  useEffect(() => {
    async function fetchSelectedUsers(token) {
      try {
        const response = await fetch(`http://localhost:8080/test`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: "JSON",
        });
      } catch (error) {
        console.error(error);
      }
      fetchSelectedUsers();
    }
  });

  return (
    <div>
      <p>
        <b>Name: </b>
        {users.name}
      </p>
      <p>
        <b>Username: </b>
        {users.username}
      </p>
      <p>
        <b>Favorite Pokémon: </b>
        {users.fav_pokemon}
      </p>
      <p>
        <b>Posts: </b>
        {users.post}
      </p>
    </div>
  );
}

export async function makePost(
  token,
  national_num,
  pokename,
  poketype1,
  poketype2,
  pokespecies,
  sign_ability
) {
  try {
    const response = await fetch(`http://localhost:8080/api/pokedata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          national_num,
          pokename,
          poketype1,
          poketype2,
          pokespecies,
          sign_ability,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
