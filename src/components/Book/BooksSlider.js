import React, { useState, useEffect } from 'react';
import useWindowSize from '../../utils/hooks/useWindowSize';
import styled from 'styled-components';

import SingleBookVertical from './SingleBookVertical';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { media } from '../../constants/breakpoint';

function BooksSlider(props) {
  const [width] = useWindowSize();
  const [firstClientX, setFirstClientX] = useState();
  const [firstClientY, setFirstClientY] = useState();
  const [clientX, setClientX] = useState();

  useEffect(() => {
    const touchStart = (e) => {
      setFirstClientX(e.touches[0].clientX);
      setFirstClientY(e.touches[0].clientY);
    };

    const preventTouch = (e) => {
      const minValue = 5; // threshold

      setClientX(e.touches[0].clientX - firstClientX);

      // Vertical scrolling does not work when you start swiping horizontally.
      if (Math.abs(clientX) > minValue) {
        e.preventDefault();
        e.returnValue = false;
        return false;
      }
    };

    window.addEventListener('touchstart', touchStart);
    window.addEventListener('touchmove', preventTouch, { passive: false });
    return () => {
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', preventTouch, {
        passive: false,
      });
    };
  }, [clientX, firstClientX, firstClientY]);

  let slidesToShow = Math.floor(width / 260);

  const responsive = {
    tablet: {
      breakpoint: { max: 3000, min: 740 },
      items: slidesToShow,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      autoPlay: false,
      items: slidesToShow,
    },
  };
  let settings = {
    infinite: true,
    slidesToSlide: 1,
    autoPlay: width < 740 ? false : true,
    autoPlaySpeed: 5000,
    customTransition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
    containerClass: 'carousel-container',
    responsive,
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
  ${media.mobile} {
    margin: 2rem 1rem;
  }
`;

const Wrap = styled.div``;
