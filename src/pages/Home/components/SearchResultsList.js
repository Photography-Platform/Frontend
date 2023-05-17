import React from "react";
import "./SearchBar.css";
import "./SearchResult";

import { SearchResult } from "./SearchResult";
export const SearchResultsList = ({ results }) => {
 
  return (
    <div className="results-list">
      {results.map((result, id) => {
        
        return <SearchResult  result={result} key={id}/>;
        
      })}
    </div>
  );
};
