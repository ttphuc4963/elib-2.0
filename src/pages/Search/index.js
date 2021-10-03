import React, { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { media } from '../../constants/breakpoint';

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
  const filterRef = useRef();
  const [data, setData] = useState(initData);
  const [query, setQuery] = useState(initQuery);
  const [selectedCatalog, setSelectedCatalog] = useState('');
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  const handleQuerySelect = useCallback(
    ({ data, id }) => {
      id && setSelectedCatalog(id);
      setQuery({ ...query, ...data });
    },
    [query]
  );

  const handlePageChange = ({ selected }) => {
    setData({ ...data, currentPage: selected + 1 });
  };

  const handleShowFilter = () => {
    setOpen(!isOpen);
  };

  console.log(query);

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
  }, [data, isOpen, keyword, query]);

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
        <TopOption>
          <SortWrapper>
            <p>Sắp xếp theo:</p>
            <Dropdown option={sortOption} onSelect={handleQuerySelect} />
          </SortWrapper>
          <FilterAction ref={filterRef} onClick={handleShowFilter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M2.75 6a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75zM6 11.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm4 4.938a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>
            </svg>
            <span>Bộ lọc tìm kiếm</span>
          </FilterAction>
        </TopOption>

        <FilterContent className={`${isOpen ? 'active' : ''}`}>
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
        </FilterContent>
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
  ${media.smallDesktop} {
    flex-direction: column-reverse;
  }
`;

const SearchLeftSide = styled.div`
  width: 75vw;
  border-right: 1px solid var(--line-color);
  padding-top: 5.2rem;
  padding-left: 5vw;
  padding-bottom: 10rem;
  flex-shirk: 1;
  .pagination {
    margin-top: 6rem;
  }
  ${media.smallDesktop} {
    width: 100vw;
    border-right: none;
    padding-right: 5%;
  }
`;

const SearchResultTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3.6rem;
  display: inline-block;
`;

const SearchRightSide = styled.div`
  margin-top: 3.6rem;
  padding-left: 4rem;
  width: 25vw;
  ${media.smallDesktop} {
    width: 100vw;
    padding: 0 5%;
    margin-top: 5.2rem;
    .tag-container {
      width: 95%;
    }
  }
  .active {
    display: block;
  }
`;

const TopOption = styled.div`
  ${media.smallDesktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SortWrapper = styled.div`
  margin-bottom: 4rem;
  p {
    font-size: 1.6rem;
    color: var(--text-color-light);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  ${media.smallDesktop} {
    display: flex;
    align-items: center;
    margin-bottom: 0rem;
    p {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`;

const FilterContent = styled.div`
  ${media.smallDesktop} {
    display: none;
    margin-top: 3rem;
  }
`;

const FilterAction = styled.button`
  font-size: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--my-orange);
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  display: none;
  align-items: center;
  background: white;
  border: 1px solid var(--my-orange);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  height: 3rem;
  ${media.smallDesktop} {
    display: flex;
  }
  svg {
    fill: var(--my-orange);
    width: 1.5rem;
    margin-right: 1rem;
  }
`;
