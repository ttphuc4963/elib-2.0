import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerSlider from './components/BannerSlider';
import BooksSlider from '../../components/Book/BooksSlider';
import {
  fetchLatestBooks,
  fetchMostBorrowBooks,
} from '../../api/function/book';

function Home() {
  const [latestBooks, setLatestBooks] = useState([]);
  const [mostBorrowBooks, setMostBorrowBook] = useState([]);
  console.log(latestBooks);
  useEffect(() => {
    const getLatestBooks = async () => {
      const res = await fetchLatestBooks(1, 10);
      if (res && res.books.length > 0) setLatestBooks(res.books);
    };
    const getMostBorrowBooks = async () => {
      const res = await fetchMostBorrowBooks(1, 10);
      if (res && res.books.length > 0) setMostBorrowBook(res.books);
    };
    getLatestBooks();
    getMostBorrowBooks();
  }, []);
  return (
    <HomeContainer>
      <BannerSlider />
      <BooksSlider title="Sách mới" books={latestBooks} />
      <BooksSlider title="Sách mượn nhiều" books={mostBorrowBooks} />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 14rem;
  overflow: hidden;
`;
