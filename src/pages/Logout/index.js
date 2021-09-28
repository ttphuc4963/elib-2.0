import React from 'react';
import { useDispatch } from 'react-redux';
import { clearProfile } from '../../app/slice/profileSlice';

function Logout() {
  const dispatch = useDispatch();

  dispatch(clearProfile());

  if (!localStorage.getItem('token')) return (window.location.href = '/');
  return <div></div>;
}

export default Logout;
