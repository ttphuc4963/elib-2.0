import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../constants/breakpoint';
import { Query } from '../../../constants/query';

function Tags({ tags, title, type, onSelect, id, selectedCatalog }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagSelect = useCallback(
    (tag, index) => {
      setSelectedTag(index);
      if (type === Query.FILTER.Total) {
        onSelect({
          data: {
            filter: type,
            filterKeyword: tag === 'Còn' ? 'true' : 'false',
          },
          id: id,
        });
      } else onSelect({ data: { filter: type, filterKeyword: tag }, id: id });
    },
    [type, onSelect, id]
  );

  const renderTags = tags.map((tag, index) => {
    return (
      <TagWrapper key={index}>
        <TagBtn
          className={`my-button my-btn-gray ${
            selectedTag === index && selectedCatalog === id && 'active-tag'
          }`}
          onClick={() => handleTagSelect(tag, index)}
        >
          {tag}
        </TagBtn>
      </TagWrapper>
    );
  });

  return (
    <TagsContainer className="tag-container">
      <TagsHeader>{title}</TagsHeader>
      {tags[0] ? <TagList>{renderTags}</TagList> : <div></div>}
    </TagsContainer>
  );
}

export default Tags;

const TagsContainer = styled.div`
  width: 70%;
  margin-bottom: 4rem;
  ${media.mobile} {
    margin-bottom: 2rem;
  }
`;
const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const TagWrapper = styled.li`
  margin: 0.8rem 0.8rem 0 0;
  .active-tag {
    background: var(--tiki-blue);
    color: white;
  }
`;

const TagBtn = styled.button`
  letter-spacing: 0.08rem;
  color: #333;
  font-weight: 500;
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const TagsHeader = styled.h3`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  color: var(--text-color-light);
  text-transform: uppercase;
  font-weight: 500;
  ${media.mobile} {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;
