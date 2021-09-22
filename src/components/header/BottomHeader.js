import React from 'react';
import styled from 'styled-components';

function BottomHeader() {
  return (
    <BottomHeaderContainer>
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
    </BottomHeaderContainer>
  );
}

export default BottomHeader;

const BottomHeaderContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 10px 10px -5px;
`;
const MainMenu = styled.ul`
  display: flex;
  height: 6rem;
  align-items: center;
  font-size: 1.8rem;
  & :first-child {
    margin-left: 3rem;
  }
`;
const MenuItem = styled.li`
  color: #333;
  width: 16rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: var(--nice-transition);
  &:hover {
    color: var(--royal-blue);
  }
  a {
    color: var(---primary-blue);
  }
`;
