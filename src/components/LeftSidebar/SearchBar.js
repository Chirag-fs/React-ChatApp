// This is a React functional component named SearchBar. It represents a search input field with a placeholder "search name" that allows users to type and search for specific names
import React from "react";

function SearchBar({ searchChange }) {
  return (
    <>
      <input
      // An <input> element is used to create the search input field. 
        style={styles.input}
        className="mb-3"
        placeholder="search name"
        onChange={searchChange}
      ></input>
    </>
  );
}
const styles = {
  input: {
    borderRadius: "18px",
    width: "100%",
    backgroundColor: "#fff",
    outline: "none",
    margin: "auto",
    padding: "5px",
    border: "1px solid #cccccc",
  },
};
// This defines the styles object that contains custom CSS styles for the search input
export default SearchBar;
// This exports the SearchBar component so that it can be imported and used in other parts of the application