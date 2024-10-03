import React, { useState } from "react";

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm); // Trigger the search
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for sarees..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;