import React from 'react';
import styled from 'styled-components';
import SingleBookHorizontal from './SingleBookHorizontal';

export default function SearchLeftSide() {
  return (
    <LeftSideContainer>
      <SearchResultTitle>Tìm thấy 412 sách</SearchResultTitle>
      <SingleBookHorizontal />
      <SingleBookHorizontal />
      <SingleBookHorizontal />
      <SingleBookHorizontal />
    </LeftSideContainer>
  );
}

const LeftSideContainer = styled.div`
  width: 100%;
  border-right: 1px solid var(--line-color);
  padding-top: 5.2rem;
  margin-left: 5%;
  padding-bottom: 10rem;
`;

const SearchResultTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3.6rem;
`;
