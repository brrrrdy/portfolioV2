import React from "react";
import { projects } from "../content/projects.json";

function Toolkit({ selectedTech, setSelectedTech }) {
  // Extract all unique tags from all projects
  const allTags = projects.flatMap((project) => project.tags);
  const uniqueTechnologies = [...new Set(allTags)].sort();

  const handleTechClick = (tech) => {
    // If clicking the same tech, deselect it
    if (selectedTech === tech) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
    }
  };

  return (
    <div className="toolkit-container">
      <div className="section-content">
        <h2 className="section-title">My Toolkit</h2>
        <p className="section-subtitle">
          Technologies and tools I've used across my projects. Click any
          technology to see related projects.
        </p>

        <div className="technologies-grid">
          {uniqueTechnologies.map((tech, index) => (
            <div
              key={index}
              className={`technology-item ${
                selectedTech === tech ? "selected" : ""
              }`}
              onClick={() => handleTechClick(tech)}
            >
              <span className="technology-name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toolkit;
