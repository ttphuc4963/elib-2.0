import api from '../index';
import { Default } from '../../constants/query';

export const search = ({
  keyword,
  page = Default.PAGE,
  limit = Default.LIMIT,
  filter,
  filterKeyword,
  orderBy,
  orderType,
}) => {
  return api({
    url: '/search/ver2',
    params: {
      keyword,
      page,
      pageCount: limit,
      filter,
      filterKeyword,
      orderBy,
      orderType,
    },
  });
};
