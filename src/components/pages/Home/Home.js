import React from 'react';
import styled from 'styled-components';
import BannerSlider from './components/BannerSlider';

function Home() {
  return (
    <HomeContainer>
      <SliderWrapper>
        <BannerSlider />
      </SliderWrapper>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
const SliderWrapper = styled.div``;
