
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Genre = () => {
  const [genreOption, setGenreOption] = useState("");
  const navigate= useNavigate();
  const [story, setStory] = useState(null); // store story here
  
    const generateStory = () => {
      if (!genreOption) {
        alert("⚠️ Please select a genre first!");
        return;
      }
    navigate(`/story?genre=${genreOption}`); // pass genre in URL
     
    };
  return (
    <><h1>&#9733; Story Template Generator &#9733;</h1>
      <p>Select a genre and let our tool create a story structure for you</p>
      <div className="genre">
        {/* a dropdown  to select genre */}
        <label>Select Genre: </label>
        <select
          value={genreOption}
          onChange={(e) => setGenreOption(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="Mystery">🎭Mystery</option>
          <option value="Horror">🎃Horror</option>
          <option value="Fantasy">🤴Fantasy</option>
          <option value="Romance">💑Romance</option>
          <option value="Comedy"> 😂Comedy</option>
          <option value="SciFi">🚀SciFi</option>
        </select>
      </div>
      <button onClick={generateStory}>Generate Story</button>
   
    </>
  );
};

export default Genre;
