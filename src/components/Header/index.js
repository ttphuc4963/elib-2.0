import React from 'react';

import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <TopHeader />
      <BottomHeader />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100vh;
`;
