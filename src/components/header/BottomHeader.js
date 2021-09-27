import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function BottomHeader() {
  return (
    <BottomHeaderContainer>
      <MainMenu>
        <MenuItem>
          <Link to="/">Trang chủ</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/search">Tất cả sách</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">Giới thiệu</Link>
        </MenuItem>
      </MainMenu>
    </BottomHeaderContainer>
  );
}

export default BottomHeader;

const BottomHeaderContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 10px 10px -5px;
  padding-left: 5%;
  height: 6rem;
`;
const MainMenu = styled.ul`
  height: 6rem;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
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
