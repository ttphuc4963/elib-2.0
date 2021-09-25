import React from 'react';
import styled from 'styled-components';
import SearchRightSide from './components/SearchRightSide';
import SearchLeftSide from './components/SearchLeftSide';

function Search() {
  return (
    <SearchContainer>
      <SearchLeftSide></SearchLeftSide>
      <SearchRightSide />
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  margin: 0 auto 0;
  width: 100%;
  display: flex;
`;
