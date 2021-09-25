import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SingleBookHorizontal() {
  return (
    <Container>
      <Link to="/search/test">
        <BookImg
          className="book-img"
          src="https://books.google.com/books/content?id=Pai-QgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        ></BookImg>
      </Link>
      <ContentWrapper className="book-content-wrapper">
        <Link to="/search/test">
          <BookTitle className="line-clamp-2 book-title">
            A First Course in Abstract Algebra: With Applications
          </BookTitle>
        </Link>
        <BookInfo>
          <BookInfoItem>
            ISBN: <span>9780131862678</span>
          </BookInfoItem>
          <BookInfoItem>
            Tác giả: <span>Joseph J. Rotman</span>
          </BookInfoItem>
          <BookInfoItem>
            Ngôn ngữ: <span>Tiếng Anh</span>
          </BookInfoItem>
          <BookInfoItem>
            Số trang: <span>581</span>
          </BookInfoItem>
          <BookInfoItem>
            Phiên bản: <span>3</span>
          </BookInfoItem>
          <BookInfoItem>
            Năm phát hành: <span>2020</span>
          </BookInfoItem>
          <BookInfoItem>
            Nhà phát hành: <span>Prentice Hall</span>
          </BookInfoItem>
        </BookInfo>
      </ContentWrapper>
      <RightWrapper>
        <i className="far fa-heart"></i>
        <div>
          <p>1 cuốn có thể mượn</p>
          <BorrowBtn className="my-button my-btn-white">Mượn sách</BorrowBtn>
        </div>
      </RightWrapper>
    </Container>
  );
}

export default SingleBookHorizontal;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--line-color);
  padding: 4rem 2.4rem;
  margin-right: 8rem;
`;

const BookImg = styled.img`
  height: 20rem;
  width: auto;
  margin-right: 3.2rem;
`;

const ContentWrapper = styled.div`
  width: 60rem;
`;

const BookTitle = styled.div`
  color: var(--text-color);
  font-size: 2rem;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 1rem;
  &:hover {
    color: #42aae6;
  }
`;

const BookInfo = styled.ul``;

const BookInfoItem = styled.li`
  font-size: 1.6rem;
  line-height: 1.6;
  span {
    margin-left: 0.6rem;
    font-weight: 600;
  }
`;

const RightWrapper = styled.div`
  padding: 3rem 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  p {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
  i {
    color: var(--text-color-light);
    margin-right: 2rem;
    margin-top: 1rem;
    font-size: 1.8rem;
    &:hover {
      cursor: pointer;
      color: var(--my-orange);
    }
  }
  div {
  }
`;

const BorrowBtn = styled.button`
  margin-left: auto;
  margin-right: 0;
  padding-left: 2rem;
  padding-right: 2rem;
`;
