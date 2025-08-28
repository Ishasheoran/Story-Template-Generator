import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { storyTemplates,genreBackgrounds } from "./Template";
import { useState,useEffect } from "react";
const StoryPage = () => {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");
  const story = storyTemplates[genre];
  const navigate = useNavigate();
  //  State for storing fetched quote
  const [quote, setQuote] = useState("");

  //  Fetch a random quote when story page loads
// StoryForm.jsx
useEffect(() => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => setQuote(`${data.content} — ${data.author}`))
    .catch((err) => {
  console.error("Error fetching quote:", err);
  setQuote("✨ Stay positive, keep building, and never stop learning!");
});

}, []);

  if (!story) {
    return <p>⚠️ No story available for this genre.</p>;
  }
  // Use this function to generate dynamic background for each genre */
const backgroundStyle = {
    backgroundImage: genre ? genreBackgrounds[genre] : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "30px",
    color: "white"
  };
  return (
    <div style={backgroundStyle}>
    <div className="story-output">
      <h1>{story.title}</h1> {/*  Here we map the story and its title from Template.js file*/}
      {story.structure.map((section, index) => (
        <div key={index} className="story-section">
          <p>{section.content}</p>
        </div>
      ))}
{/*  Displaying random quote */}
        <div className="quote-box">
          <h4>✨ Inspiration</h4>
          <p>{quote}</p>
        </div>

      <button onClick={() => navigate("/")}>&#8592; Back</button>
    </div></div>
  );
};

export default StoryPage;
