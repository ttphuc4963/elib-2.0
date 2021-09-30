import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Query } from '../../../constants/query';

function Tags({ tags, title, type, onSelect }) {
  const handleTagSelect = useCallback(
    (tag) => {
      if (type === Query.FILTER.Total) {
        onSelect({
          filter: type,
          filterKeyword: tag === 'Còn' ? 'true' : 'false',
        });
      } else onSelect({ filter: type, filterKeyword: tag });
    },
    [type, onSelect]
  );

  const renderTags = tags.map((tag, index) => {
    return (
      <TagWrapper key={index}>
        <TagBtn
          className="my-button my-btn-gray"
          onClick={() => handleTagSelect(tag)}
        >
          {tag}
        </TagBtn>
      </TagWrapper>
    );
  });

  return (
    <TagsContainer>
      <TagsHeader>{title}</TagsHeader>
      <TagList>{renderTags}</TagList>
    </TagsContainer>
  );
}

export default Tags;

const TagsContainer = styled.div`
  width: 70%;
  margin-bottom: 6rem;
`;
const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const TagWrapper = styled.li`
  margin: 0.8rem 0.8rem 0 0;
`;

const TagBtn = styled.button`
  letter-spacing: 0.08rem;
  color: #333;
  font-weight: 500;
`;

const TagsHeader = styled.h3`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  color: var(--text-color-light);
  text-transform: uppercase;
  font-weight: 500;
`;
