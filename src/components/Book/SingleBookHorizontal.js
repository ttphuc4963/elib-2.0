import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addFavorites, removeFavorites } from '../../app/slice/favoriteSlice';
import { media } from '../../constants/breakpoint';

function SingleBookHorizontal({ bookInfo }) {
  const dispatch = useDispatch();
  const { favouriteList } = useSelector((x) => x.favorite);

  const handleAddFavorite = useCallback(() => {
    dispatch(addFavorites(bookInfo));
  }, [bookInfo, dispatch]);

  const handleRemoveFavorite = useCallback(() => {
    dispatch(removeFavorites(bookInfo.ISBN));
  }, [bookInfo, dispatch]);

  const isFavorite = useMemo(
    () =>
      favouriteList
        ? favouriteList.some((book) => book.ISBN === bookInfo.ISBN)
        : false,
    [bookInfo, favouriteList]
  );

  return (
    <Container>
      <TopWrapper>
        <p>{bookInfo.total} cuốn có thể mượn</p>
        {isFavorite ? (
          <RemoveFavoriteIcon
            onClick={handleRemoveFavorite}
            className="fas fa-heart"
          ></RemoveFavoriteIcon>
        ) : (
          <FavoriteIcon
            onClick={handleAddFavorite}
            className="far fa-heart"
          ></FavoriteIcon>
        )}
      </TopWrapper>
      <LeftWrapper>
        <Link to={`/book/${bookInfo.ISBN}`}>
          <BookImg className="book-img" src={bookInfo.coverImg}></BookImg>
        </Link>
        <ContentWrapper className="book-content-wrapper">
          <Link to={`/book/${bookInfo.ISBN}`}>
            <BookTitle className="line-clamp-2 book-title">
              {bookInfo.bookName}
            </BookTitle>
          </Link>
          <BookInfo>
            <BookInfoItem>
              ISBN: <span>{bookInfo.ISBN}</span>
            </BookInfoItem>
            <BookInfoItem>
              Tác giả: <span>{bookInfo.author}</span>
            </BookInfoItem>
            <BookInfoItem>
              Ngôn ngữ: <span>{bookInfo.language}</span>
            </BookInfoItem>
            <BookInfoItem>
              Số trang:{' '}
              <span>
                {!bookInfo.numberOfPages ? 'Không rõ' : bookInfo.numberOfPages}
              </span>
            </BookInfoItem>
            <BookInfoItem>
              Phiên bản: <span>{bookInfo.edition}</span>
            </BookInfoItem>
            <BookInfoItem>
              Năm phát hành: <span>{bookInfo.publishYear}</span>
            </BookInfoItem>
            <BookInfoItem>
              Nhà phát hành: <span>{bookInfo.publisher}</span>
            </BookInfoItem>
          </BookInfo>
        </ContentWrapper>
      </LeftWrapper>

      <RightWrapper>
        <BorrowBtn className="my-button my-btn-white">Mượn sách</BorrowBtn>
      </RightWrapper>
    </Container>
  );
}

export default SingleBookHorizontal;

const Container = styled.div`
  border-top: 1px solid var(--line-color);
  position: relative;
  padding: 2rem 2.4rem;
  margin-right: 8rem;
  width: 100%;
  margin-right: 3.2rem;
  ${media.tablet} {
    display: block;
  }
  ${media.mobile} {
    padding: 2rem 0rem;
  }
}
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  i {
    z-index: 1;
    font-size: 2.4rem !important;
    color: var(--text-color-light);
    margin-right: 2rem;
    font-size: 1.8rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
const FavoriteIcon = styled.i``;
const RemoveFavoriteIcon = styled.i`
  color: var(--my-orange) !important;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  width: 100%;
  ${media.mobile} {
    padding-left: 0;
  }
`;

const BookImg = styled.img`
  height: 20rem;
  width: 16rem;
  margin-right: 3.2rem;
  ${media.mobile} {
    width: 12rem;
    height: 15rem;
  }
`;

const ContentWrapper = styled.div`
  width: 60rem;
  ${media.tablet} {
    width: 40rem;
  }
  ${media.mobile} {
    width: 20rem;
  }
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
  ${media.mobile} {
    font-size: 1.4rem;
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
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const RightWrapper = styled.div`
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  ${media.tablet} {
    position: static;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: 1rem;
  }
`;

const BorrowBtn = styled.button`
  margin-left: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  ${media.mobile} {
    width: 100%;
    margin-top: 2rem;
    font-size: 1.4rem;
    padding: 1rem;
  }
`;
