import api from '../index';

export const fetchProfile = () => {
  return api({ url: '/readers/me' });
};
