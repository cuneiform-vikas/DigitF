import React, { useState } from "react";

const Search = () => {
  const [open, setOpen] = useState();
  const [searchData, setsearchData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchData);
    setsearchData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={searchData}
        onChange={(e) => setsearchData(e.target.value)}
        className={open ? "visible" : ""}
      />

      <button type="submit" onClick={() => setOpen(!open)}>
        <img src="/images/search-icon.png" alt="" />
      </button>
    </form>
  );
};

export default Search;
