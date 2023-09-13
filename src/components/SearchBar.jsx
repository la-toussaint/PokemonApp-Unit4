import React, { useState } from "react";

export default function SearchBar({ setSearchParam }) {
  const [query, setQuery] = useState("");

  const handleChange = (searchParam) => {
    setQuery(searchParam);
    setSearchParam(searchParam);
  };

  return (
    <div className="search-bar">
      <label>
        Search:{" "}
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value.toLowerCase())}
          value={query}
        />
      </label>
    </div>
  );
}
