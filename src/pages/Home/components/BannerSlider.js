import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

//react-slick

function ImgSlider() {
  let settings = {
    infinite: true,
    speed: 2000,
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
            <h2>Thư viện khoa CNTT</h2>
            <span>
              Mở cửa các ngày trong tuần từ T2 - T5 (giờ hành chính)
              <br /> Nhận sách tại văn phòng I53.
            </span>
            <Link to="/search">
              <BannerButton className="my-button">Xem tất cả sách</BannerButton>
            </Link>
          </BannerLeft>
          <BannerRight src="/images/dev-vector.svg" />
        </Banner>
      </Wrap>
      <Wrap>
        <Banner>
          <BannerLeft>
            <h2>Tủ sách phong phú</h2>
            <span>
              Thư viện có gần 600 đầu sách với đa dạng các thể loại như:
              <br /> AI, Cơ sở dữ liệu, Mạng máy tính,...
            </span>
            <BannerButton className="my-button">Xem tất cả sách</BannerButton>
          </BannerLeft>
          <BannerRight src="/images/book.svg" />
        </Banner>
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  li.slick-active button:before {
    color: var(--primary-blue) !important;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  height: 25rem;
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
  width: 50rem;
  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  span {
    font-size: 1.6rem;
    line-height: 1.4;
  }
`;

const BannerButton = styled.div`
  margin-top: 1.6rem;
  padding: 1rem;
`;

const BannerRight = styled.img`
  height: 80%;
`;
