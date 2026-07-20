import { useState } from "react";
import API from "../../services/api";

function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const response = await API.get(`/research?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
      alert("Search failed!");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search research papers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "70%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;