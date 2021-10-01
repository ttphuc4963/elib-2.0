import React, { useCallback, useEffect, useState } from 'react';

import styled from 'styled-components';

import './paginate.css';

import { Query, Default } from '../../constants/query';

import ReactPaginate from 'react-paginate';
import SingleBookHorizontal from '../../components/Book/SingleBookHorizontal';
import Dropdown from './components/Dropdown';
import Tags from './components/Tags';
import { search } from '../../api/function/search';
import { useSelector } from 'react-redux';

const sortOption = [
  {
    id: 0,
    label: 'Tên sách từ A-Z',
    orderBy: Query.ORDER_BY.Name,
    orderType: Query.ORDER_TYPE.ASC,
  },
  {
    id: 1,
    label: 'Tên sách từ Z-A',
    orderBy: Query.ORDER_BY.Name,
    orderType: Query.ORDER_TYPE.DESC,
  },
  {
    id: 2,
    label: 'Năm phát hành mới nhất',
    orderBy: Query.ORDER_BY.PublishYear,
    orderType: Query.ORDER_TYPE.DESC,
  },
  {
    id: 3,
    label: 'Năm phát hành cũ nhất',
    orderBy: Query.ORDER_BY.PublishYear,
    orderType: Query.ORDER_TYPE.ASC,
  },
  {
    id: 4,
    label: 'Lượt mượn nhiều nhất',
    orderBy: Query.ORDER_BY.BorrowCount,
    orderType: Query.ORDER_TYPE.DESC,
  },
  {
    id: 5,
    label: 'Lượt mượn ít nhất',
    orderBy: Query.ORDER_BY.BorrowCount,
    orderType: Query.ORDER_TYPE.ASC,
  },
];

const initData = {
  books: [],
  publishYears: [],
  tagNames: [],
  currentPage: Default.PAGE,
  limit: Default.LIMIT,
};

const initQuery = {
  filter: Query.FILTER.Total,
  orderBy: Query.ORDER_BY.Name,
  orderType: Query.ORDER_TYPE.ASC,
};

function Search() {
  const keyword = useSelector((x) => x.search.keyword);

  const [data, setData] = useState(initData);
  const [query, setQuery] = useState(initQuery);
  const [selectedCatalog, setSelectedCatalog] = useState('');

  const handleQuerySelect = useCallback(
    ({ data, id }) => {
      setSelectedCatalog(id);
      setQuery({ ...query, ...data });
    },
    [query]
  );

  const handlePageChange = ({ selected }) => {
    setData({ ...data, currentPage: selected + 1 });
  };

  console.log(data);

  useEffect(() => {
    const handleSearch = async () => {
      const { orderBy, orderType, filter, filterKeyword } = query;
      const { currentPage, limit } = data;
      const newData = await search({
        keyword,
        orderBy,
        orderType,
        filter,
        filterKeyword,
        page: currentPage,
        limit,
      });
      if (!newData) return setData(initData);
      if (JSON.stringify(data) !== JSON.stringify(newData)) setData(newData);
    };

    handleSearch();
  }, [data, keyword, query]);

  return (
    <SearchContainer>
      <SearchLeftSide>
        <SearchResultTitle>
          {typeof data.totalBooks === 'undefined'
            ? 'Đang tìm sách...'
            : data.totalBooks !== 0
            ? `Tìm thấy ${data.totalBooks} sách`
            : 'Không tìm thấy sách nào'}
        </SearchResultTitle>
        {data.books &&
          data.books.map((book) => (
            <SingleBookHorizontal key={book.ISBN} bookInfo={book} />
          ))}
        {data.totalPages > 1 && (
          <ReactPaginate
            initialPage={data.currentPage - 1}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            containerClassName={'pagination'}
            breakClassName={'break-me'}
            activeClassName={'active'}
            pageCount={data.totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
          />
        )}
      </SearchLeftSide>
      <SearchRightSide>
        <SortWrapper>
          <p>Sắp xếp theo:</p>
          <Dropdown option={sortOption} onSelect={handleQuerySelect} />
        </SortWrapper>
        <Tags
          id="total"
          tags={['Còn', 'Hết']}
          title={'Số lượng'}
          type={Query.FILTER.Total}
          onSelect={handleQuerySelect}
          selectedCatalog={selectedCatalog}
        />
        <Tags
          id="tag-name"
          tags={data.tagNames}
          title={'Thể loại'}
          type={Query.FILTER.Tag}
          onSelect={handleQuerySelect}
          selectedCatalog={selectedCatalog}
        />
      </SearchRightSide>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  margin: 0 auto 0;
  width: 100vw;
  display: flex;
  overflow: hidden;
`;

const SearchLeftSide = styled.div`
  width: 70vw;
  border-right: 1px solid var(--line-color);
  padding-top: 5.2rem;
  padding-left: 5%;
  padding-bottom: 10rem;
  flex-shirk: 1;
  .pagination {
    margin-top: 6rem;
  }
`;

const SearchResultTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3.6rem;
  display: inline-block;
`;

const SearchRightSide = styled.div`
  margin-top: 6rem;
  padding-left: 6.2rem;
  width: 30vw;
`;

const SortWrapper = styled.div`
  position: relative;
  margin-bottom: 14rem;
  width: auto;
  p {
    font-size: 1.6rem;
    color: var(--text-color-light);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  .dropdown {
    position: absolute;
    border: 1px solid var(--line-color);
    box-shadow: none;
  }
`;
