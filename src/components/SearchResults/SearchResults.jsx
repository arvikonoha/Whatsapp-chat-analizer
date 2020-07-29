import React, { useContext } from "react";
import MessagesContext from "../../MessagesState/MessagesContext";
import SearchResultItem from "./SearchResultItem/SearchResultItem";

function SearchResults() {
  let { results } = useContext(MessagesContext);
  return (
    <>
      {results
        .filter((result) => !result.body.includes("<Media omitted>"))
        .map((result, index) => (
          <SearchResultItem
            key={result.createdAtTime + result.createdAtDate + index}
            result={result}
          />
        ))}
    </>
  );
}

export default SearchResults;
