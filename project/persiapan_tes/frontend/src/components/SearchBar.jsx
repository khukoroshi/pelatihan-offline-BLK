const SearchBar = ({
  searchInput,
  setSearchInput,
  handleSearch,
  handleReset,
}) => {
  return (
    <div className="search-bar">
      <label for="inputCari">
        <input
          type="text"
          placeholder="Cari berdasarkan nama...."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </label>
      <button onClick={handleSearch} className="btn-primary">
        Cari
      </button>
      <button onClick={handleReset} className="btn-success">
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
