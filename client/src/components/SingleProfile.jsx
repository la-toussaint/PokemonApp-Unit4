import { useSelector, useDispatch } from "react-redux";
import NavBar from "./navbar";
import { useState } from "react";
import { fetchProfile, deletePost } from "../API/ajax-helpers";
import { setProfile, deletePostFromProfile } from "./redux/index";
import React from "react";

export default function ProfileLog() {
  //   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  //   const users = useSelector((state) => state.auth.users);
  //   const token = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(true);
  const [posts, postList] = useState([]);
  const [deletePostFromProfile] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setProfile] = useState(null);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isLoggedIn) {
      fetch(token).then((result) => {
        console.log("foo", result);
        dispatch(setProfile(result));
      });
    }
  }, [isLoggedIn]);

  const renderImages = () => {
    checkIfCrossoriginMeAvailable()
      .then((crossoriginMeAvailable) => {
        return imageUrls.map((imageUrl, index) => (
          <img
            src={
              crossoriginMeAvailable
                ? `https://crossorigin.me/${imageUrl}`
                : `https://cors-anywhere.herokuapp.com/${imageUrl}`
            }
            alt
            id="image-alt"
            type="image/png"
          />
        ));
      })
      .catch((error) => {
        console.error("Error checking crossorigin.me availability:", error);
      });
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePostDelete = (token, pokedata_id) => {
    deletePost(token, pokedata_id);
    deletePostFromProfile(id);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Posts for Username: {users?.username}</h2>
      <div>
        <button className="profile-log-button" onClick={handleToggleDropdown}>
          {isOpen ? "Hide Logs" : "Show Logs"}
        </button>
        {isOpen && (
          <ul className="profile-log-list">
            {users?.posts?.map((post) => (
              <li className="profile-log-item" key={post.pokename}>
                Pokémon Image:{" "}
                <img
                  className="post-img"
                  src={post.b4g_max_image}
                  alt={post.pokename}
                />
                , Pokémon National Id: {post.national_num}, Pokémon Name:{" "}
                {post.pokename}, Pokémon Type 1: {post.poketype1}, Pokémon Type
                2: {post.poketype2}, Pokémon Species: {post.pokespecies}, GMAX:
                Pokémon G-Max Image:
                <img
                  className="post-img-back"
                  src={post.post_g_max_image}
                  alt={post.pokename - "Giga"}
                />
                , Pokémon G-Max Move: {post.g_max_move}, Pokémon G-Max Move
                Type: {post.g_max_move_type}, Pokémon Height: {post.height},
                Pokémon Weight: {post.weight}, Pokémon Post-Gmax Height:{" "}
                {post.post_g_max_height}, REPRODUCTION: Pokémon Gender:{" "}
                {post.gender}, Pokémon Egg Group: {post.egg_group}, Pokémon
                Compatible Parent: {post.comp_parent}
                <button
                  className="delete"
                  onClick={() => handlePostDelete(token, pokedata_id)}
                  disabled={users.pokedata_id !== post.pokedata}
                >
                  Delete post
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
