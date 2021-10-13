import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Search from './pages/Search';
import BookDetail from './pages/BookDetail';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { isLoggedIn } from './utils/auth';
import { clearProfile, setProfile } from './app/slice/profileSlice';
import styled from 'styled-components';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { getFavorites } from './app/slice/favoriteSlice';
import { ToastContainer } from 'react-toastify';
function App() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const profile = useSelector((x) => x.profile);
  const { favouriteList } = useSelector((x) => x.favorite);

  useEffect(() => {
    const checkLoggedIn = async () => {
      if (profile) return;
      const currentUser = await isLoggedIn();
      dispatch(currentUser ? setProfile(currentUser) : clearProfile());
    };
    if (profile && favouriteList.length === 0) dispatch(getFavorites());
    checkLoggedIn();
  }, [dispatch, favouriteList, profile]);

  return (
    <Container className="App">
      <ToastContainer autoClose={2000}></ToastContainer>
      {pathname !== '/login' && pathname !== '/logout' && <Header />}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/book/:isbn">
          <BookDetail />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {pathname !== '/login' && pathname !== '/logout' && <Footer />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  overflow: hidden;
`;
