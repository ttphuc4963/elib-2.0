import React from 'react';
import styled from 'styled-components';
import BannerSlider from './components/BannerSlider';
import BooksSlider from './components/BooksSlider';

function Home() {
  return (
    <HomeContainer>
      <BannerSlider />
      <BooksSlider title="Sách mới" />
      <BooksSlider title="Sách mượn nhiều" />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;
  overflow: hidden;
`;
