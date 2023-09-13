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

export default function AllCards({imageUrls}) {
  const [posts, postList] = useState([]);
  const [error, setError] = useState(null);
  const [isFlipped, setFlipped] = useState({});
  const [searchParam, setSearchParam] = useState(null);
  const navigate = useNavigate();
  const renderImages = () => {
    return imageUrls.map((imageUrl, index) => (
      <img key={index} src={imageUrl} alt={`Image ${index}`} />
    ));
  };




  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
	Promise.all([
	  fetchAllPokedata(),
	  fetchAllGmax(),
	  fetchAllPoke_egg(),
	  fetchAllBreed(),
	  fetchAllEgg_group()
	])
	.then((results) => {
	  const [pokedata, gmax, egg_group, poke_egg, breed] = results;
	  postList(pokedata, gmax, egg_group, poke_egg, breed);
	})
	.catch((error) => {
	  setError(error);
	});
  }, []);
  
  useEffect(() => {
    const filteredPosts = posts.filter((p) => {
      return p?.title.toLowerCase().includes(searchParam);
    });
    postList(filteredPosts);
  }, [searchParam]);

  const handleClick = (id) => {
    setFlipped({ ...isFlipped, [id]: !isFlipped[id] });
  };

  return (
    <div className="post-card-container">
      <SearchBar setSearchParam={setSearchParam} />
      {posts.map((post) => (
        <div className="post-card" key={post.pokename}>
          <ReactCardFlip
            flipDirection="horizontal"
            isFlipped={isFlipped[post.pokename]}
          >
            <div className="flip-card-front">
              <div>Pokémon National Id: {post.national_num} </div>
              <div> Pokémon Name: {post.pokename}</div>
              <div>Pokémon Type 1: {post.poketype1} </div>
              <div>Pokémon Type 2: {post.poketype2}</div>
              <div>Pokémon Species: {post.pokespecies}</div>
              <div>Pokémon Image: {renderImages(b4g_max_image)}</div>
  

              <button className="details" onClick={() => handleClick(post._id)}>
                See Details
              </button>
              {isLoggedIn && (
                <button className="delete" onClick={() => deletePost(post._id)}>
                  Delete post
                </button>
              )}
            </div>
            <div className="flip-card-back">
              <p>Post Name: {post.pokename}</p>
              <p>Post Name Id: {post.poketype1}</p>
              <p>Post Cohort: {post.poketype2}</p>
              <p>Post Created At: {post.pokespecies}</p>
              <p>Description: {post.sign_ability}</p>
              <p>Location: {post.g_max_move}</p>
              <p>Messages: {post.g_max_move_type}</p>
              <p>Post Price: {post.height}</p>
              <p>Post Title: {post.weight}</p>
              <p>Delivery: {post.gender}</p>
              <p>Post Name: {post.egg_group}</p>
              <p>Post Name: {post.gender}</p>
              <p>Post Image: {renderImages(post_g_max_image)}</p>
              <p>Post Name: {post.post_g_max_height}</p>
              <button className="flip" onClick={() => handleClick(post._id)}>
                Flip over
              </button>
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </div>
  );
}
