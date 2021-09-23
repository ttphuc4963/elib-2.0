import React from 'react';
import styled from 'styled-components';

function Tags() {
  return (
    <TagsContainer>
      <TagsHeader>Thể loại</TagsHeader>
      <TagsList>
        <TagWrapper>
          <TagBtn className="my-button my-btn-gray">AI</TagBtn>
        </TagWrapper>
        <TagWrapper>
          <TagBtn className="my-button my-btn-gray">Trí tuệ nhân tạo</TagBtn>
        </TagWrapper>
        <TagWrapper>
          <TagBtn className="my-button my-btn-gray">Cơ sở dữ liệu</TagBtn>
        </TagWrapper>
        <TagWrapper>
          <TagBtn className="my-button my-btn-gray">Hệ Thống Thông Tin</TagBtn>
        </TagWrapper>
        <TagWrapper>
          <TagBtn className="my-button my-btn-gray">Công Nghệ Phần Mềm</TagBtn>
        </TagWrapper>
        <TagWrapper>
          <TagBtn className="my-button my-btn-gray">Mạng máy tính</TagBtn>
        </TagWrapper>
      </TagsList>
    </TagsContainer>
  );
}

export default Tags;

const TagsContainer = styled.div`
  margin-left: 6.2rem;
  width: 70%;
`;
const TagsList = styled.ul`
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
