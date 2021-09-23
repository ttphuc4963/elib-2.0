import React from 'react';
import styled from 'styled-components';
import Tags from './components/Tags';
import SearchLeftSide from './components/SearchLeftSide';

function Search() {
  return (
    <SearchContainer>
      <SearchLeftSide></SearchLeftSide>
      <SearchRightSide>
        <Tags />
      </SearchRightSide>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  margin: 0 auto 0;
  width: 100%;
  display: flex;
`;

const SearchRightSide = styled.div`
  margin-top: 5.2rem;
`;
