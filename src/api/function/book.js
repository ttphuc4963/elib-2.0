import api from '../index';

export const fetchBooks = (page = 1, limit = 10) => {
  return api({ url: '/books', params: { page, pageCount: limit } });
};

export const fetchBook = (isbn) => {
  return api({ url: `/books/${isbn}` });
};

export const fetchLatestBooks = (page = 1, limit = 10) => {
  return api({ url: '/books/new', params: { page, pageCount: limit } });
};

export const fetchMostBorrowBooks = (page = 1, limit = 10) => {
  return api({
    url: '/books/recentBorrowed',
    params: { page, pageCount: limit },
  });
};
