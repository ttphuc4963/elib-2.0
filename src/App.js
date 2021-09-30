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

function App() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const profile = useSelector((x) => x.profile);

  useEffect(() => {
    const checkLoggedIn = async () => {
      if (profile) return;
      const currentUser = await isLoggedIn();
      dispatch(currentUser ? setProfile(currentUser) : clearProfile());
    };

    checkLoggedIn();
  }, [dispatch, profile]);

  return (
    <Container className="App">
      {pathname !== '/login' && pathname !== '/logout' && <Header />}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/search/:isbn">
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
  overflow-x: hidden;
`;
