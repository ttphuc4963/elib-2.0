import React from 'react';
import styled from 'styled-components';

function SingleBookVertical(props) {
  return (
    <BookWrapper>
      <BookImg src={props.imgURL} />
      <BookName className="line-clamp-2">
        Data mining: practical machine learning tools and technique
      </BookName>
      <span></span>
      <BookAuthor>Tác giả: Nate Powell</BookAuthor>
      <OrderBookButton className="my-button my-btn-white">
        Mượn sách
      </OrderBookButton>
    </BookWrapper>
  );
}

export default SingleBookVertical;

const BookWrapper = styled.div`
  background-color: white;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 25rem;
  margin: 0.8rem auto;
  padding: 1.8rem;
  border-radius: 1rem;
  display: inline-block;
  display: flex;
  flex-direction: column;
`;

const BookImg = styled.img`
  margin: 0 auto 2rem auto;
  width: 18rem;
`;

const BookName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-color);
`;

const BookAuthor = styled.p`
  font-size: 1.2rem;
  margin-top: 0.8rem;
`;

const OrderBookButton = styled.button`
  margin-top: 1.2rem;
  border-radius: 0.8rem;
  left: 0;
`;
