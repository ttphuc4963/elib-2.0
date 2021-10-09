import React from 'react';

import styled from 'styled-components';
import { media } from '../../../constants/breakpoint';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

function ImgSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 740 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 739, min: 0 },
      items: 1,
      autoPlay: false,
    },
  };
  let settings = {
    infinite: true,
    responsive,
    slidesToSlide: 1,
    items: 1,
    autoPlay: true,
    autoPlaySpeed: 3000,
    customTransition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
    containerClass: 'carousel-container',
    itemClass: 'carousel-item',
    arrows: false,
  };

  return (
    <CarouselContainer>
      <Carousel {...settings}>
        <Wrap>
          <Banner>
            <BannerLeft>
              <h2>Thư viện khoa CNTT</h2>
              <p>
                Mở cửa các ngày trong tuần từ T2 - T5 (giờ hành chính)
                <br /> Nhận sách tại văn phòng I53.
              </p>
              <Link to="/search">
                <BannerButton className="my-button">
                  Xem tất cả sách
                </BannerButton>
              </Link>
            </BannerLeft>
            <BannerRight src="/images/dev-vector.svg" />
          </Banner>
        </Wrap>
        <Wrap>
          <Banner>
            <BannerLeft>
              <h2>Tủ sách phong phú</h2>
              <p>
                Thư viện có gần 600 đầu sách với đa dạng các thể loại như:
                <br /> AI, Cơ sở dữ liệu, Mạng máy tính,...
              </p>
              <BannerButton className="my-button">Xem tất cả sách</BannerButton>
            </BannerLeft>
            <BannerRight src="/images/book.svg" />
          </Banner>
        </Wrap>
      </Carousel>
    </CarouselContainer>
  );
}

export default ImgSlider;

const CarouselContainer = styled.div``;

const Wrap = styled.div`
  cursor: pointer;
  height: 24rem;
  ${media.mobile} {
    height: 20rem;
  }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
`;

const BannerLeft = styled.div`
  color: white;
  h2 {
    font-size: 3.2rem;
    font-weight: 600;
    ${media.mobile} {
      font-size: 2.2rem;
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 1.4;
    margin: 2rem 0;
    ${media.mobile} {
      font-size: 1.4rem;
    }
  }
  // ${media.tablet} {
  //   width: 100rem;
  // }
`;

const BannerButton = styled.div`
  padding: 1rem;
  ${media.mobile} {
    padding: 0.6rem;
    font-size: 1.2rem;
  }
`;

const BannerRight = styled.img`
  height: 80%;
  ${media.tablet} {
    display: none !important;
  }
`;
