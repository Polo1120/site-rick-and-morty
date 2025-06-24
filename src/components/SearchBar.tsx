import React, { useState } from "react";
import { SearchBarProps } from "../utils/type";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, query, loading }) => {
  const [input, setInput] = useState(query);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(input);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Buscar personajes..."
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Cargando..." : "Buscar"}
      </button>
    </div>
  );
};

export default SearchBar;
