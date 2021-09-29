import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Query, Default } from '../../constants/query';

import SingleBookHorizontal from '../../components/Book/SingleBookHorizontal';
import Dropdown from './components/Dropdown';
import Tags from './components/Tags';
import { search } from '../../api/function/search';
import { useSelector } from 'react-redux';

const tags = [
  { ID: 1, tagName: 'AI' },
  { ID: 2, tagName: 'Trí tuệ nhân tạo' },
  { ID: 3, tagName: 'Cơ sở dữ liệu' },
  { ID: 4, tagName: 'Hệ Thống Thông Tin' },
  { ID: 5, tagName: 'Công Nghệ Phần Mềm' },
  { ID: 6, tagName: 'Mạng máy tính' },
];

const sortOption = [
  { id: 0, label: 'Tên sách từ A-Z' },
  { id: 1, label: 'Tên sách từ Z-A' },
  { id: 2, label: 'Năm phát hành mới nhất' },
  { id: 3, label: 'Năm phát hành cũ nhất' },
  { id: 4, label: 'Lượt mượn nhiều nhất' },
  { id: 5, label: 'Lượt mượn ít nhất' },
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
  orderBy: Query.ORDER_BY.PublishYear,
  orderType: Query.ORDER_TYPE.DESC,
};

function Search() {
  const keyword = useSelector((x) => x.search.keyword);

  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const handleSearch = async () => {
      const newData = await search(keyword);
      if (!newData) return setData(initData);
      if (JSON.stringify(data) !== JSON.stringify(newData)) setData(newData);
    };
    handleSearch({ keyword });
  }, [data, keyword]);

  return (
    <SearchContainer>
      <SearchLeftSide>
        <SearchResultTitle>
          {!data.totalBooks
            ? 'Đang tìm sách...'
            : data.totalBooks !== 0
            ? `Tìm thấy ${data.totalBooks} sách`
            : 'Không tìm thấy sách nào'}
        </SearchResultTitle>

        {data.books &&
          data.books.map((book) => <SingleBookHorizontal bookInfo={book} />)}

        {/* <SingleBookHorizontal />
        <SingleBookHorizontal />
        <SingleBookHorizontal /> */}
      </SearchLeftSide>
      <SearchRightSide>
        <SortWrapper>
          <p>Sắp xếp theo:</p>
          <Dropdown option={sortOption} />
        </SortWrapper>
        <Tags
          tags={[
            { ID: 1, tagName: 'Còn' },
            { ID: 2, tagName: 'Hết' },
          ]}
          title={'Số lượng'}
        />
        <Tags tags={tags} title={'Thể loại'} />
      </SearchRightSide>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  margin: 0 auto 0;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const SearchLeftSide = styled.div`
  width: 100%;
  border-right: 1px solid var(--line-color);
  padding-top: 5.2rem;
  margin-left: 5%;
  padding-bottom: 10rem;
`;

const SearchResultTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3.6rem;
`;

const SearchRightSide = styled.div`
  margin-top: 6rem;
  margin-left: 6.2rem;
`;

const SortWrapper = styled.div`
  position: relative;
  margin-bottom: 14rem;
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
