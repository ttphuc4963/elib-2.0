import React from 'react';
import styled from 'styled-components';
import BannerSlider from './components/BannerSlider';
import BooksSlider from '../../components/Book/BooksSlider';

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
  margin: 0 auto;
  padding-bottom: 14rem;
  overflow: hidden;
`;
