import { useState } from "react";
import { makePost } from "../API/ajax-helpers";
import { useSelector } from "react-redux";

export default function NewPostForm() {
  const token = useSelector((state) => state.auth.token);
  const [postPokename, setPostPokename] = useState("");
  const [postNational_num, setPostNational_num] = useState("");
  const [postPoketype1, setPostPoketype1] = useState("");
  const [postPoketype2, setPostPoketype2] = useState("");
  const [postPokespecies, setPostPokespecies] = useState("");
  const [postSign_ability, setPostSign_ability] = useState("");
  console.log('postPokename: ', postPokename);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the data from state
    console.log({
      postPokename,
      postNational_num,
      postPoketype1,
      postPokespecies,
      postSign_ability,
    });
    await makePost(
      token,
      postNational_num,
      postPokename,
      postPoketype1,
      postPokespecies,
      postSign_ability
    );
    resetForm();
    setSubmitted(true);
  }

  function resetForm() {
    setPostNational_num("");
    setPostPokename("");
    setPostPoketype1("");
    setPostPokespecies("");
    setPostSign_ability("");
  }
  return (
    <>
      {submitted && <h1>Your post has been added - Happy shopping!</h1>}
      <form className="newPost-form" onSubmit={handleSubmit}>
        <h3 className="new-post-title">Add A Pokémon Here! </h3>
        <label>
          Pokémon National Number:{" "}
          <input
            value={postNational_num}
            onChange={(e) => {
              setPostNational_num(e.target.value);
            }}
          />
        </label>
        <hr />

        <label>
          Pokémon Name:{" "}
          <label>
            <input
              value={postPokename}
              onChange={(e) => {
                setPostPokename(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Pokémon Type:{" "}
          <label>
            <input
              value={postPoketype1}
              onChange={(e) => {
                setPostPoketype1(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Pokémon Species:{" "}
          <input
            value={postPokespecies}
            onChange={(e) => {
              setPostPokespecies(e.target.value);
            }}
          />
        </label>
        <hr />
        <div>
          <label>
            Pokémon Signature Ability:{" "}
            <input
              value={postSign_ability}
              onChange={(e) => {
                setPostSign_ability(e.target.value);
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
