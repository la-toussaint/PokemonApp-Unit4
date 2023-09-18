import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  fetchAllPokedata,
  deletePost,
  fetchAllGmax,
  fetchAllPoke_egg,
  fetchAllBreed,
  fetchAllEgg_group,
} from "../API/ajax-helpers";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

export default function AllCards() {
  const [posts, postList] = useState([]);
  const [error, setError] = useState(null);
  const [isFlipped, setFlipped] = useState({});
  const [searchParam, setSearchParam] = useState(null);
  const navigate = useNavigate();
  const renderImages = () => {
    // checkIfCrossoriginMeAvailable()
    //   .then((crossoriginMeAvailable) => {
    return imageUrls.map((imageUrl, index) => {
      const isGigantamax = imageUrl.includes("Gigantamax");
      const altText = isGigantamax ? `${pokename} Giga` : pokename;

      return <img key={index} src={imageUrl} alt={altText} />;
    });
  };

  useEffect(() => {
    const filteredPosts = posts.filter((p) => {
      return p?.pokename.toLowerCase().includes(searchParam);
    });
    postList(filteredPosts);
  }, [searchParam]);

  const handleClick = (id) => {
    setFlipped({ ...isFlipped, [id]: !isFlipped[id] });
  };
  return (
    <div className="post-card-container">
      <SearchBar setSearchParam={setSearchParam} />
      {posts.map((post) => {
        const pokename = post.pokename;
        return (
          <div className="post-card" key={post.pokename}>
            <ReactCardFlip
              flipDirection="horizontal"
              isFlipped={isFlipped[post.pokedata_id]}
            >
              <div className="flip-card-front">
                <img
                  className="post-img"
                  src={post.b4g_max_image}
                  alt={altText}
                />
                <div>Pokémon National Id: {post.national_num} </div>
                <div> Pokémon Name: {post.pokename}</div>
                <div>Pokémon Type 1: {post.poketype1} </div>
                <div>Pokémon Type 2: {post.poketype2}</div>
                <div>Pokémon Species: {post.pokespecies}</div>

                <button
                  className="details"
                  onClick={() => handleClick(post.pokedata_id)}
                >
                  See Details
                </button>
                {isLoggedIn && (
                  <button
                    className="delete"
                    onClick={() => deletePost(post.pokedata_id)}
                  >
                    Delete post
                  </button>
                )}
              </div>
              <div className="flip-card-back">
                <img
                  className="post-img-back"
                  src={post.post_g_max_image}
                  alt={altText}
                />
                <p>Pokename: {post.pokename}</p>
                <p>Poketype1 Id: {post.poketype1}</p>
                <p>Poketype2: {post.poketype2}</p>
                <p>Pokespecies: {post.pokespecies}</p>
                <p>Signature Ability: {post.sign_ability}</p>
                <p>G_max_move: {post.g_max_move}</p>
                <p>G-max move type: {post.g_max_move_type}</p>
                <p>Height: {post.height}</p>
                <p>Weight: {post.weight}</p>
                <p>Gender: {post.gender}</p>
                <p>egg group: {post.egg_group}</p>
                <p>gender: {post.gender}</p>
                <button
                  className="flip"
                  onClick={() => handleClick(post.pokedata_id)}
                >
                  Flip over
                </button>
              </div>
            </ReactCardFlip>
          </div>
        );
      })}
    </div>
  );
}
