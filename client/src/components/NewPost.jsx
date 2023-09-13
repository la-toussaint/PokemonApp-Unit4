import { useState } from "react";
import { makePost } from "../API/ajax-helpers";
import { useSelector } from "react-redux";

export default function NewPostForm() {
  const token = useSelector((state) => state.auth.token);
  const [postPokename, setPostPokename] = useState("");
  const [postNational_num, setNational_num] = useState("");
  const [postPoketype1, setPoketype1] = useState("");
  const [postPoketype2, setPoketype2] = useState("");
  const [postPokespecies, setPokespecies] = useState("");
  const [postHeight, setHeight] = useState("");
  const [postWeight, setWeight] = useState("");
  const [postSign_ability, setSign_ability] = useState(""); 
  const [postG_max_move, setG_max_move] = useState("");
  const [postG_max_move_type, setPostG_max_move_type] = useState("");
  const [postPost_g_max_height, setPost_g_max_height] = useState("");
  const [postEggtype1, setEggtype1] = useState("");
  const [postEggtype2, setEggtype2] = useState("");
  const [postGender, setGender] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the data from state
    console.log({
		postPokename,
		postNational_num,
		postPoketype1,
		postPoketype2,
		postPokespecies,
		postHeight,
		postSign_ability,
		postG_max_move,
		postG_max_move_type,
		postEggtype1,
		postEggtype2,
		postGender
      
    });
    await makePost(
      token,
      postTitle,
      postDescription,
      postPrice,
      postWillDeliver
    );
    resetForm();
    setSubmitted(true);
  }

  function resetForm() {
    setPostAuthorUsername("");
    setPostAuthor_Id("");
    setPostCohort("");
    setPostCreatedAt("");
    setPostDescription("");
    setPostLocation("");
    setPostMessage("");
    setPostPrice("");
    setPostTitle("");
    setPostWillDeliver(false);
    setPost_Id("");
    setPostUpdatedAt("");
    setSubmitted(false);
  }
  return (
    <>
      {submitted && <h1>Your post has been added - Happy shopping!</h1>}
      <form className="newPost-form" onSubmit={handleSubmit}>
        <h3>Add A New Post Here:</h3>
        <label>
          Post Message:{" "}
          <input
            value={postMessage}
            onChange={(e) => {
              setPostMessage(e.target.value);
            }}
          />
        </label>
        <hr />

        <label>
          Post Price:{" "}
          <label>
            <input
              value={postPrice}
              onChange={(e) => {
                setPostPrice(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Title:{" "}
          <label>
            <input
              value={postTitle}
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Description:{" "}
          <input
            value={postDescription}
            onChange={(e) => {
              setPostDescription(e.target.value);
            }}
          />
        </label>
        <hr />
        <div>
          <label>
            Will Deliver:{" "}
            <input
              type="checkbox"
              value={postWillDeliver}
              onChange={(e) => {
                setPostWillDeliver(e.target.value);
              }}
            />
          </label>
        </div>
        <hr />
        <div>
          <button className="reset" type="reset" onClick={resetForm}>
            Reset form
          </button>
        </div>
        <div>
          <button className="submit" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
}