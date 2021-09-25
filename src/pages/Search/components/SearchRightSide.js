import React from 'react';
import styled from 'styled-components';

import Tags from './Tags';

const tags = [
  { ID: 1, tagName: 'AI' },
  { ID: 2, tagName: 'Trí tuệ nhân tạo' },
  { ID: 3, tagName: 'Cơ sở dữ liệu' },
  { ID: 4, tagName: 'Hệ Thống Thông Tin' },
  { ID: 5, tagName: 'Công Nghệ Phần Mềm' },
  { ID: 6, tagName: 'Mạng máy tính' },
];

function SearchRightSide() {
  return (
    <Container>
      <SortWrapper>
        <p>Sắp xếp theo:</p>
        <button>
          Tên sách từ A-Z <i className="fas fa-caret-down"></i>
        </button>
      </SortWrapper>
      <Tags
        tags={[
          { ID: 1, tagName: 'Còn' },
          { ID: 2, tagName: 'Hết' },
        ]}
        title={'Số lượng'}
      />
      <Tags tags={tags} title={'Thể loại'} />
    </Container>
  );
}

export default SearchRightSide;

const Container = styled.div`
  margin-top: 6rem;
  margin-left: 6.2rem;
`;

const SortWrapper = styled.div`
  display: flex;
  margin-bottom: 6rem;
  align-items: center;
  p,
  button {
    font-size: 1.6rem;
    color: var(--text-color-light);
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 2rem;
  }

  button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    text-transform: none;
    font-size: 1.4;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
    i {
      margin-left: 1rem;
    }
  }
`;
