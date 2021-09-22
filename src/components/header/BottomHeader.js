import React from 'react';
import styled from 'styled-components';

function BottomHeader() {
  return (
    <MainMenu>
      <MenuItem>
        <a href="/">Trang chủ</a>
      </MenuItem>
      <MenuItem>
        <a href="/">Tất cả sách</a>
      </MenuItem>
      <MenuItem>
        <a href="/">Giới thiệu</a>
      </MenuItem>
    </MainMenu>
  );
}

export default BottomHeader;

const MainMenu = styled.ul`
  display: flex;
  height: 5rem;
  background-color: var(--primary-blue);
  align-items: center;
  font-size: 1.8rem;
  padding: 0 3.6rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 10px;
`;
const MenuItem = styled.li`
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #6491f3;
  }
  a {
    color: white;
  }
`;
