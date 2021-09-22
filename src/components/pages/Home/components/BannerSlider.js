import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//react-slick

function ImgSlider() {
  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <Banner>
          <BannerLeft>
            <h2>Tủ sách phong phú</h2>
            <span>Thư viện có gần 600 đầu sách với đa dạng các thể loại.</span>
            <BannerButton>Xem tất cả sách</BannerButton>
          </BannerLeft>
        </Banner>
      </Wrap>
      <Wrap>
        <Banner>
          <BannerLeft>
            <h2>Hơn 600 đầu sách</h2>
            <span>Thư viện có gần 600 đầu sách với đa dạng các thể loại.</span>
            <BannerButton>Xem tất cả sách</BannerButton>
          </BannerLeft>
        </Banner>
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin: 1rem 5rem;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: var(--primary-blue);
  }
  button {
    z-index: 1;

    &:before {
      font-size: 2rem;
      color: #73e0f6;
    }
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  height: 25rem;
  padding: 1rem;
`;

const Banner = styled.div`
  background: rgb(2, 154, 254);
  background: linear-gradient(
    90deg,
    rgba(2, 154, 254, 1) 0%,
    rgba(2, 158, 254, 1) 27%,
    rgba(115, 224, 246, 1) 72%
  );
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
`;

const BannerLeft = styled.div`
  color: white;
  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 1.6;
  }
  span {
    font-size: 1.6rem;
  }
`;

const BannerButton = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  width: fit-content;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border-radius: 2rem;
  transition: all 0.2s ease 0s;
  letter-spacing: 0.16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border: 0.2rem solid white;
  font-weight: 600;
  &:hover {
    background-color: white;
    color: var(--primary-blue);
  }
`;
