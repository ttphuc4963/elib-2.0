import React from 'react';
import useWindowSize from '../../utils/hooks/useWindowSize';
import styled from 'styled-components';

import SingleBookVertical from './SingleBookVertical';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BooksSlider(props) {
  const [width] = useWindowSize();
  console.log(width);
  let settings = {
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: Math.floor(width / 320),
    // responsive: [
    //   {
    //     breakpoint: 1400,
    //     settings: {
    //       slidesToShow: 4,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       infinite: true,
    //     },
    //   },
    // ],
  };

  const renderBooks = () => {
    return props.books.map((book) => {
      return (
        <Wrap>
          <SingleBookVertical bookInfo={book} />
        </Wrap>
      );
    });
  };

  return (
    <BooksSliderContainer>
      <SliderTitle>{props.title}</SliderTitle>
      <Carousel {...settings}>{renderBooks()}</Carousel>
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
