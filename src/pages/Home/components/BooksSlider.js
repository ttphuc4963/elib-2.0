import React from 'react';
import styled from 'styled-components';

import SingleBookVertical from './SingleBookVertical';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BooksSlider(props) {
  let settings = {
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };
  return (
    <BooksSliderContainer>
      <SliderTitle>{props.title}</SliderTitle>
      <Carousel {...settings}>
        <Wrap>
          <SingleBookVertical imgURL="https://i.ibb.co/02Z1Vqm/content-id-MSZwwg-EACAAJ-printsec-frontcover-img-1-zoom-1-source-gbs-api.jpg" />
        </Wrap>
        <Wrap>
          <SingleBookVertical imgURL="https://i.ibb.co/02Z1Vqm/content-id-MSZwwg-EACAAJ-printsec-frontcover-img-1-zoom-1-source-gbs-api.jpg" />
        </Wrap>
        <Wrap>
          <SingleBookVertical imgURL="https://i.ibb.co/02Z1Vqm/content-id-MSZwwg-EACAAJ-printsec-frontcover-img-1-zoom-1-source-gbs-api.jpg" />
        </Wrap>
        <Wrap>
          <SingleBookVertical imgURL="https://i.ibb.co/02Z1Vqm/content-id-MSZwwg-EACAAJ-printsec-frontcover-img-1-zoom-1-source-gbs-api.jpg" />
        </Wrap>
        <Wrap>
          <SingleBookVertical imgURL="https://i.ibb.co/02Z1Vqm/content-id-MSZwwg-EACAAJ-printsec-frontcover-img-1-zoom-1-source-gbs-api.jpg" />
        </Wrap>
        <Wrap>
          <SingleBookVertical imgURL="https://i.ibb.co/02Z1Vqm/content-id-MSZwwg-EACAAJ-printsec-frontcover-img-1-zoom-1-source-gbs-api.jpg" />
        </Wrap>
        <Wrap>
          <SingleBookVertical imgURL="https://i.ibb.co/02Z1Vqm/content-id-MSZwwg-EACAAJ-printsec-frontcover-img-1-zoom-1-source-gbs-api.jpg" />
        </Wrap>
        <Wrap>
          <SingleBookVertical imgURL="https://i.ibb.co/02Z1Vqm/content-id-MSZwwg-EACAAJ-printsec-frontcover-img-1-zoom-1-source-gbs-api.jpg" />
        </Wrap>
      </Carousel>
    </BooksSliderContainer>
  );
}

export default BooksSlider;

const BooksSliderContainer = styled.div`
  margin-top: 6rem;
`;

const SliderTitle = styled.h3`
  color: var(--text-color);
  font-size: 2.2rem;
  font-weight: 700;
  margin-left: 6%;
`;
const Carousel = styled(Slider)`
  margin: 2rem 6rem;
  button {
    z-index: 1;
  }

  .slick-arrow {
    &:before {
      color: var(--my-orange);
      opacity: 1;
      font-size: 3rem;
    }
  }

  .slick-prev {
    &:before {
      position: absolute;
      right: -4rem;
    }
  }
  .slick-next {
    &:before {
      position: absolute;
      left: -4rem;
    }
  }

  .slick-list {
    overflow: hidden;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div``;
