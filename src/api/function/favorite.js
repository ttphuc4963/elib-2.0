import api from '../index';

export const fetchFavorites = () => {
  return api({ url: '/readers/me/favourite' });
};

export const createFavorites = (isbn) => {
  return api({ url: `/readers/me/favourite/${isbn}`, method: 'post' });
};

export const deleteFavorites = (isbn) => {
  return api({ url: `/readers/me/unfavourite/${isbn}`, method: 'delete' });
};
