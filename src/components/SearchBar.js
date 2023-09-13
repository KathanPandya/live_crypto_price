import React from "react";

const SearchBar = ({ setsearchedcrypto }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Coins.."
        onChange={(event) => {
          setsearchedcrypto(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
