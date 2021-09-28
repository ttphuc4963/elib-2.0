import { fetchProfile } from '../api/function/user';

export const isLoggedIn = () => localStorage.getItem('token') && fetchProfile();
