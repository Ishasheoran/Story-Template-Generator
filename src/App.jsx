
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./components/Genre";
import StoryPage from "./components/StoryForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Genre />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
