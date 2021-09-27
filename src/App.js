import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Search from './pages/Search';
import BookDetail from './pages/BookDetail';
import Login from './pages/Login';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== '/login' && <Header />}
      <Switch>
        <Route path="/login">
          <Login />
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
      {pathname !== '/login' && <Footer />}
    </div>
  );
}

export default App;
