import React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/breakpoint';

function SingleBookVertical({ bookInfo }) {
  const { bookName, coverImg, author } = bookInfo;
  return (
    <BookWrapper>
      <BookImg src={coverImg} />
      <BookName className="line-clamp-2">{bookName}</BookName>
      <span></span>
      <BookAuthor>{author}</BookAuthor>
      <OrderBookButton className="my-button my-btn-white">
        Mượn sách
      </OrderBookButton>
    </BookWrapper>
  );
}

export default SingleBookVertical;

const BookWrapper = styled.div`
  position: relative;
  background-color: white;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 26rem;
  height: 42rem;
  margin: 0.8rem auto;
  padding: 1.8rem;
  border-radius: 1rem;
  display: inline-block;
  display: flex;
  flex-direction: column;
  ${media.tablet} {
    width: 18rem;
    height: 34rem;
  }
`;

const BookImg = styled.img`
  margin: 0 auto 2rem auto;
  width: 18rem;
  height: 24rem;
  ${media.tablet} {
    width: 12rem;
    height: 18rem;
  }
`;

const BookName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-color);
  height: 4rem;
  flex-shirk: 1;
  ${media.tablet} {
    font-size: 1.4rem;
    height: 3.4rem;
  }
`;

const BookAuthor = styled.p`
  font-size: 1.2rem;
  margin-top: 0.8rem;
  ${media.tablet} {
    font-size: 1rem;
    margin-top: 0.6rem;
  }
`;

const OrderBookButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 1.6rem;
  margin-top: 1.2rem;
  border-radius: 0.8rem;
  ${media.tablet} {
    bottom: 1rem;
    font-size: 1.2rem;
    padding: 0.8rem;
  }
`;
