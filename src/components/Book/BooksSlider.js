import React from 'react';
import useWindowSize from '../../utils/hooks/useWindowSize';
import styled from 'styled-components';

import SingleBookVertical from './SingleBookVertical';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function BooksSlider(props) {
  const [width] = useWindowSize();

  let slidesToShow = Math.floor(width / 270);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: slidesToShow,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: slidesToShow,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: slidesToShow,
      slidesToSlide: 1,
    },
  };
  let settings = {
    infinite: true,
    slidesToSlide: 1,
    autoPlay: true,
    autoPlaySpeed: 3000,
    customTransition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
    containerClass: 'carousel-container',
    itemClass: 'carousel-item',
    responsive,
    removeArrowOnDeviceType: ['tablet', 'mobile'],
  };

  const renderBooks = () => {
    return props.books.map((book) => {
      return (
        <Wrap key={book.ISBN}>
          <SingleBookVertical bookInfo={book} />
        </Wrap>
      );
    });
  };

  return (
    <BooksSliderContainer>
      <SliderTitle>{props.title}</SliderTitle>
      <CarouselContainer>
        <Carousel {...settings}>{renderBooks()}</Carousel>
      </CarouselContainer>
    </BooksSliderContainer>
  );
}

export default BooksSlider;

const BooksSliderContainer = styled.div`
  margin-top: 6rem;
  width: 100%;
`;

const SliderTitle = styled.h3`
  color: var(--text-color);
  font-size: 2.2rem;
  font-weight: 700;
  margin-left: 6%;
`;
const CarouselContainer = styled.div`
  margin: 2rem 6rem;
  .carousel-container {
    .react-multiple-carousel__arrow {
      background: var(--my-orange);
      opacity: 0.8;
    }
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
