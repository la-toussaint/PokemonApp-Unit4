import { React, useState } from "react";
import {
  BASE_URL_USER_ME,
  BASE_URL_POSTS,
  BASE_URL_POSTS1,
  BASE_URL_POSTS2,
  BASE_URL_POSTS3,
  BASE_URL_POSTS4,
  BASE_URL_USERS,
  BASE_URL_DELET,
} from "./index";
import { useSelector } from "react-redux";

import { React, useState } from "react";
import {
  BASE_URL_USER_ME,
  BASE_URL_POSTS,
  BASE_URL_POSTS1,
  BASE_URL_POSTS2,
  BASE_URL_POSTS3,
  BASE_URL_POSTS4,
  BASE_URL_USERS,
  BASE_URL_DELET,
} from "./index";
import { useSelector } from "react-redux";

// export default function CreatePostForm({ posts, setPosts }) {
//   const [name, setName] = useState("");
//   const [breed, setBreed] = useState("");
//   const [error, setError] = useState(null);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const APIData = await createPost(name, breed);
//     if (APIData.success) {
//       console.log("New Post: ", APIData.data.newPost);

//       // Resetting all posts manually
//       const newPostsList = [...posts, APIData.data.newPost];
//       setPosts(newPostsList);

//       setName("");
//       setBreed("");
//     } else {
//       setError(APIData.error.message);
//     }
//   }
// }

export const fetchAllUsers = async () => {
  try {
    // write a fetch request for:
    // https://fsa-puppy-bowl.herokuapp.com/api/users
    const response = await fetch(BASE_URL_USERS);
    const result = await response.json();

    return result.data.users;
  } catch (error) {
    console.error(error);
  }

  // update UserList with the results
};

export const fetchAllPosts = async () => {
  try {
    const response = await fetch(BASE_URL_POSTS);
    const result = await response.json();
    console.log(result.pokedata);
    return result.pokedata;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllPosts1 = async () => {
	try {
	  const response = await fetch(BASE_URL_POSTS1);
	  const result = await response.json();
	  console.log(result.data.posts1);
	  return result.data.posts1;
	} catch (error) {
	  console.log(error);
	}
  };
  
  export const fetchAllPosts2 = async () => {
	try {
	  const response = await fetch(BASE_URL_POSTS2);
	  const result = await response.json();
	  console.log(result.data.posts2);
	  return result.data.posts2;
	} catch (error) {
	  console.log(error);
	}
  };
  
  export const fetchAllPosts3 = async () => {
	try {
	  const response = await fetch(BASE_URL_POSTS3);
	  const result = await response.json();
	  console.log(result.data.posts3);
	  return result.data.posts3;
	} catch (error) {
	  console.log(error);
	}
  };
  
  export const fetchAllPosts4 = async () => {
	try {
	  const response = await fetch(BASE_URL_POSTS4);
	  const result = await response.json();
	  console.log(result.data.posts4);
	  return result.data.posts4;
	} catch (error) {
	  console.log(error);
	}
  };
  
export const fetchProfile = async (token) => {
  try {
    const response = await fetch(BASE_URL_USER_ME, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (token, _id) => {
  try {
    const response = await fetch(`${BASE_URL_POSTS}/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

function RenderSelectedUser({ pickMyId, myId }) {
  const fetchSingleUser = async (id) => {
    try {
      const response = await fetch(`BASE_URL_USERS_ME`);
      const user = await response.json();
      const userCard = document.createCard("div");
      userCard.classList.add("user");
      userCard.innerHTML = `
            <h4>${user.name}</h4>
            <p>${user.username}</p>
            <p>${user.password}</p>
            <p>${user.token}</p>
            ${user.posts}</p>

        `;
      usersContainer.appendChild(userCard);
    } catch (error) {
      console.log(error);
    }
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchSelectedUser() {
      try {
        const response = await fetch(`BASE_URL_USERS_ME`);
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedUser();
  }, []);
  return (
    <div>
      <p>
        <b>Name: </b>
        {user.name}
      </p>
      <p>
        <b>Username: </b>
        {user.username}
      </p>
      <p>
        <b>Posts: </b>
        {user.post}
      </p>
    </div>
  );
}

export async function makePost(token, title, description, price, willDeliver) {
  try {
    const response = await fetch(BASE_URL_POSTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: willDeliver,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}