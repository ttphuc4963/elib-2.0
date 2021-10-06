import React, { useEffect, useState } from 'react';
import useWindowSize from '../../utils/hooks/useWindowSize';
import styled from 'styled-components';

import SingleBookVertical from './SingleBookVertical';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const listLength = props.books.length,
    totalSlide = Math.floor(width / 320);

  let slidesToShow =
    listLength !== 0 && totalSlide !== 0
      ? listLength > totalSlide
        ? totalSlide
        : listLength
      : 1;

  let settings = {
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow,
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
      <Carousel {...settings}>{renderBooks()}</Carousel>
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
