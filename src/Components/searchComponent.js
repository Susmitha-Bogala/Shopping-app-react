import React, { useState } from "react";

const SearchComponent = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const getResults = (searchQuery) => {
    fetch(`${"https://dummyjson.com/products/search?q="}${searchQuery}`)
      .then((res) => res.json())
      .then((response) => {
        props.updateDataOnsearch(response.products);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        border: "1px solid grey",
      }}
    >
      <input
        type="text"
        style={{
          height: 40,
          alignSelf: "center",
          padding: 10,
          margin: 20,
          width: "80%",
          borderRadius: 10,
        }}
        value={props.searchKey}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          getResults(e.target.value);
        }}
        placeholder={"Start typing to search"}
      ></input>
    </div>
  );
};

export default SearchComponent;
