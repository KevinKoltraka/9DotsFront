import React from "react";
import "./portfolio.css";

const FilterBar = ({ currentFilter, setFilter }) => {
  const categories = ["All", "Web Development", "Mobile Apps", "Design"];

  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${
            currentFilter === category ? "active" : ""
          }`}
          onClick={() => setFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
