// search input, updates filter state in App

import { useRef } from "react";

function SearchBar({ notes, setSearchText }) {
  const inputRef = useRef();
  return (
    <>
      {notes.length === 0 ? (
        "No notes added yet!"
      ) : (
        <input
          className="search-input"
          ref={inputRef}
          type="text"
          name="search"
          id=""
          placeholder="Search note by title"
          onChange={() => {
            setSearchText(inputRef.current.value);
          }}
        />
      )}
    </>
  );
}
export default SearchBar;
