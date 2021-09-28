import api from '../index';

export const signIn = (info, reCaptchaToken) => {
  return api({
    url: '/readers/login',
    method: 'post',
    data: { ...info, dev: 1 },
  });
};
