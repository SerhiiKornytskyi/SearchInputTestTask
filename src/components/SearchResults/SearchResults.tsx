import React from "react";
import {SearchResult} from '../utils/searchData';
import { StyledSearchResultsWrap, StyledSearchResult, StyledSearchResultTitle, StyledSearchResultContent } from './styled.ts';

export const SearchResults: React.FC<SearchResult> = ({ searchResults }): JSX.Element => {

  const renderResults = () => {
    return Object.keys(searchResults.searchItems).map((key, i) => <StyledSearchResult key={key + i}>
        <StyledSearchResultTitle>{key}</StyledSearchResultTitle>
        <StyledSearchResultContent>Description: {searchResults.searchItems[key]}</StyledSearchResultContent>
      </StyledSearchResult>
    );
  }
  
  return Object.keys(searchResults).length ? (
      <>
          <span>{searchResults.queryTime}</span>
          <StyledSearchResultsWrap>
            {renderResults()}
          </StyledSearchResultsWrap>
      </>
  ) : (<div>No results...</div>);
}