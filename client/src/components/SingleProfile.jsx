import { useSelector, useDispatch } from "react-redux";
import NavBar from "./navbar";
import { useState } from "react";

import { fetchProfile, deletePost } from "../API/ajax-helpers";
import { setProfile, deletePostFromProfile } from "./redux/index";
import React from "react";

export default function ProfileLog() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const token = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(true);
  const [posts, postList] = useState([]);
  console.log(setProfile(profile));

  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn) {
      fetchProfile(token).then((data) => {
        console.log("foo", data);
        dispatch(setProfile(data));
      });
    }
  }, [isLoggedIn]);

  const renderImages = () => {
    checkIfCrossoriginMeAvailable()
      .then((crossoriginMeAvailable) => {
        return imageUrls.map((imageUrl) => (
          <img
            src={
              crossoriginMeAvailable
                ? `https://crossorigin.me/${imageUrl}`
                : `https://cors-anywhere.herokuapp.com/${imageUrl}`
            }
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

  const handlePostDelete = (pokedata_id) => {
    deletePost(token, pokedata_id);
    deletePostFromProfile(id);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">
        Posts for Username: {profile?.username}
      </h2>
      <div>
        <button className="profile-log-button" onClick={handleToggleDropdown}>
          {isOpen ? "Hide Logs" : "Show Logs"}
        </button>
        {isOpen && (
          <ul className="profile-log-list">
            {profile?.posts?.map((post) => (
              <li className="profile-log-item" key={post.pokename}>
                Pokémon National Id: {post.national_num}, Pokémon Name:{" "}
                {post.pokename}, Pokémon Type 1: {post.poketype1}, Pokémon Type
                2: {post.poketype2}, Pokémon Species: {post.pokespecies},
                Pokémon Image: {renderImages(b4g_max_image)}
                Post Name: {post.pokename}, Post Name Id: {post.poketype1},
                Pokémon Type: {post.poketype2}, Pokémon Species:{" "}
                {post.pokespecies}, Signature Ability: {post.sign_ability},
                G-Max Move: {post.g_max_move}, Messages: {post.g_max_move_type},
                Post Price: {post.height}, Post Title: {post.weight}, Delivery:{" "}
                {post.gender}, Post Name: {post.egg_group}, Post Name:{" "}
                {post.gender}, Post Image:{renderImages(post_g_max_image)},
                {post.post_g_max_height},
                <button
                  className="delete"
                  onClick={() => handlePostDelete(post.pokedata_id)}
                  disabled={profile.pokedata_id !== post.pokedata}
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
