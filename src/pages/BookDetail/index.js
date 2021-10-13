import React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/breakpoint';
import SingleBookHorizontal from '../../components/Book/SingleBookHorizontal';
import BooksSlider from '../../components/Book/BooksSlider';
import { useEffect } from 'react';
import { fetchBook } from '../../api/function/book';
import { useParams } from 'react-router';
import { useState } from 'react';

function BookDetail() {
  const { isbn } = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    const getBook = async () => {
      const book = await fetchBook(isbn);
      setData(book);
    };
    getBook();
  }, [isbn]);
  console.log(data);
  return (
    <Container>
      {data && data.bookInfo && (
        <>
          <BookDetailWrapper>
            <LeftSide>
              <SingleBookHorizontal bookInfo={data.bookInfo} />
              <BookDescription>
                <BookDescriptionHeading>Mô tả</BookDescriptionHeading>
                <BookDescriptionContent>
                  {data.bookInfo.description}
                </BookDescriptionContent>
              </BookDescription>
            </LeftSide>
          </BookDetailWrapper>
          <BooksSlider title="Sách liên quan" books={data.relatedBook} />
        </>
      )}
    </Container>
  );
}

export default BookDetail;

const Container = styled.div`
  width: 100vw;
  padding-bottom: 14rem;
`;

const BookDetailWrapper = styled.div``;

const LeftSide = styled.div`
  width: 80%;
  padding-top: 2rem;
  margin-left: 5%;
  div {
    border-top: none;
  }
  // // .book-img {
  // //   height: 25rem;
  // //   width: 20rem;
  // //   margin-right: 6rem;
  // // }
  // // .book-title {
  // //   display: block;
  // //   font-size: 2.2rem;
  // // }

  ${media.smallDesktop} {
    width: 90%;
  }
`;

const BookDescription = styled.div`
  width: 92%;
  margin-left: 2%;
`;

const BookDescriptionHeading = styled.h2`
  display: inline-block;
  color: var(--royal-blue);
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  border-bottom: 2px solid var(--royal-blue);
`;

const BookDescriptionContent = styled.p`
  font-size: 1.6rem;
  line-height: 3.2rem;
`;

// const RightSide = styled.div`
//   width: 30vw;
//   margin-top: 6rem;
//   margin-left: 6.2rem;
// `;
