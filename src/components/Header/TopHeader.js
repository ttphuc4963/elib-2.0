import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { media } from '../../constants/breakpoint';

import { setKeyword } from '../../app/slice/searchSlice';

function TopHeader() {
  const history = useHistory();
  const dispatch = useDispatch();
  const profile = useSelector((x) => x.profile);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchMobileInputRef = useRef(null);
  const searchIconRef = useRef(null);

  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isMobileSearchActive, setMobileSearchActive] = useState(false);

  const handleShowDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };

  const handleShowMobileSearch = () => {
    setMobileSearchActive(!isMobileSearchActive);
  };

  const handleClearInput = () => {
    searchInputRef.current.value = '';
  };

  const handleClearMobileInput = () => {
    searchMobileInputRef.current.value = '';
  };

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(setKeyword(searchInputRef.current.value));
      history.push('search');
    },
    [dispatch, history]
  );

  const handleMobileSearch = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(setKeyword(searchMobileInputRef.current.value));
      history.push('search');
    },
    [dispatch, history]
  );

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownActive(!isDropdownActive);
      }
    };
    if (isDropdownActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isDropdownActive]);

  return (
    <Container>
      <TopHeaderContainer>
        <Nav>
          <NavLogo>
            <Link to="/">
              <Logo src="/images/logo.svg" alt="" />
            </Link>
            <LogoHeading>
              <AppName>eLib 2.0</AppName>
              <AppTitle>Thư viện khoa CNTT</AppTitle>
            </LogoHeading>
          </NavLogo>
          <NavSearch>
            <SearchWrapper spellcheck="false" onSubmit={handleSearch}>
              <i className="fas fa-search"></i>
              <SearchInput
                ref={searchInputRef}
                placeholder="Tìm kiếm sách, tác giả, NXB, ..."
                spellCheck="false"
              ></SearchInput>
              <i onClick={handleClearInput} className="fas fa-times"></i>
            </SearchWrapper>
          </NavSearch>
          <NavAction>
            <div className="header-search">
              <i onClick={handleShowMobileSearch} className="fas fa-search"></i>
            </div>

            {profile ? (
              <UserImg onClick={handleShowDropdown} src="/images/avatar.jpg" />
            ) : (
              <Link to="/login">
                <LoginButton className="my-button">Đăng nhập</LoginButton>
              </Link>
            )}
            <DropdownWrapper
              ref={dropdownRef}
              className={`${isDropdownActive ? 'active-dropdown' : ''}`}
            >
              <ul>
                <li>Thông tin tài khoản</li>
                <hr />
                <Link to="/logout">
                  <li>Đăng xuất</li>
                </Link>
              </ul>
            </DropdownWrapper>
          </NavAction>
        </Nav>
      </TopHeaderContainer>
      <SearchWrapper
        ref={searchIconRef}
        spellcheck="false"
        onSubmit={handleMobileSearch}
        className={`${
          isMobileSearchActive ? 'search-active' : ''
        } search_mobile`}
      >
        <SearchInput
          ref={searchMobileInputRef}
          placeholder="Tìm kiếm sách, tác giả, NXB, ..."
          spellCheck="false"
          className="search-input_mobile"
        ></SearchInput>
        <i
          onClick={() => {
            handleClearMobileInput();
            handleShowMobileSearch();
          }}
          className="fas fa-times search-close_mobile"
        ></i>
      </SearchWrapper>
    </Container>
  );
}

export default TopHeader;

const Container = styled.div`
  width: 100vw;
  .search-active{
    display: block !important;
  }
  .search_mobile {
    position: relative;
    display: none;
    height:5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 10px -5px;
    .search-close_mobile{
      position:absolute;
      right: 1.8rem;
      font-size: 1.6rem;
      margin-top: 1.7rem;

    }
    &:focus-within {
      caret-color: #185adb;
      .fa-times {
        transform: rotate(90deg) scale(1.2);
  
        color: var(--primary-blue);
        cursor: pointer;
      }
  }
  .search-input_mobile {
    margin-left: 0;
    padding: 2rem 0 2rem 5%;
    height: 5rem;
    width: 90%;
  }
  
`;
const TopHeaderContainer = styled.div`
  background: #1a94ff;
  display: flex;
  justify-content: center;
  height: 8rem;
  width: 100%;
  ${media.mobile} {
    height: 6rem;
  }
`;
const Nav = styled.div`
  padding: 1.4rem 0;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const NavLogo = styled.div`
  align-items: center;
  display: flex;
`;
const Logo = styled.img`
  width: 6rem;
  margin-right: 1rem;
  ${media.mobile} {
    width: 4.2rem;
  }
`;

const LogoHeading = styled.div`
  color: var(---text-color);
  ${media.tablet} {
    display: none;
  }
`;

const AppName = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

const AppTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`;

const NavSearch = styled.div`
  background: white;
  border-radius: 20px;
  height: 4rem;
  width: 42rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus-within {
    caret-color: #185adb;
    border: 1.5px solid rgba(0, 0, 0, 0.2);
    .fa-times {
      transform: rotate(90deg) scale(1.2);

      color: var(--primary-blue);
      cursor: pointer;
    }
    .fa-search {
      color: var(--primary-blue);
    }
  }
  ${media.mobile} {
    display: none;
  }
`;

const SearchWrapper = styled.form`
  color: #c8c6c6;
  height: 100%;
  display: flex;
  align-items: center;
  .fa-times {
    transition: all 0.4s cubic-bezier(0.65, -0.6, 0.24, 1.65);
  }
`;

const SearchInput = styled.input`
  color: rgba(0, 0, 0, 0.7);
  margin-left: 1rem;
  font-size: 1.6rem;
  height: 100%;
  width: 35rem;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const LoginButton = styled.button`
  ${media.mobile} {
    font-size: 1.2rem;
    padding: 0.6rem;
  }
`;

const NavAction = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  .active-dropdown {
    visibility: visible;
    transform: translateY(0);
  }
  .header-search {
    font-size: 1.6rem;
    cursor: pointer;
    height: 4rem;
    width: 4rem;
    display: none;
    margin-right: 1.2rem;
    align-items: center;
    justify-content: center;
    background: none;
    ${media.mobile} {
      display: flex;
    }
  }
`;

const UserImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  cursor: pointer;
  ${media.mobile} {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

const DropdownWrapper = styled.div`
  visibility: hidden;
  transform: translateY(-1rem);
  transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  background: white;
  position: absolute;
  width: 20rem;
  top: 6rem;
  right: 0;
  border-radius: 10px;
  color: var(--text-color-light);
  font-size: 1.6rem;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.1) 0 -5px 20px -2px;
  z-index: 1;
  hr {
    height: 0.2rem;
    border-radius: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
    margin: 0;
    width: 80%;
    margin: 0 auto;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 1.4rem 0 1.4rem 2rem;
      &:hover {
        cursor: pointer;
        color: var(--royal-blue);
      }
    }
  }
  a {
    color: var(--text-color-light);
  }
`;
