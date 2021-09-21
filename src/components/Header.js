import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import '../App.css';

function Header() {
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const [isDropdownActive, setDropdownActive] = useState(false);

  const handleShowDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };

  const handleClearInput = () => {
    searchInputRef.current.value = '';
  };

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
    <Nav>
      <NavLogo>
        <Logo src="/images/logo.svg" alt="" />
        <LogoHeading>
          <AppName>eLib 2.0</AppName>
          <AppTitle>Thư viện khoa CNTT</AppTitle>
        </LogoHeading>
      </NavLogo>
      <NavSearch>
        <SearchWrapper spellcheck="false">
          <i class="fas fa-search"></i>
          <SearchInput
            ref={searchInputRef}
            placeholder="Tìm kiếm sách, tác giả, NXB, ..."
            spellcheck="false"
          ></SearchInput>
          <i onClick={handleClearInput} class="fas fa-times"></i>
        </SearchWrapper>
      </NavSearch>
      <NavAction>
        <LoginButton>Đăng nhập</LoginButton>
        <UserImg
          onClick={handleShowDropdown}
          src="https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/241496820_3059596747620924_7015950603068095091_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QA0KNBQcFsMAX_QLDpx&_nc_ht=scontent.fvca1-1.fna&oh=ffd17100463040b7edd7f5ce5a4a7340&oe=614F1C34"
        />
        <DropdownWrapper
          ref={dropdownRef}
          className={`${isDropdownActive ? 'active-dropdown' : ''}`}
        >
          <ul>
            <li>Thông tin tài khoản</li>
            <hr />
            <li>Đăng xuất</li>
          </ul>
        </DropdownWrapper>
      </NavAction>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  padding: 14px 36px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 0px 12px 0px;
  border-bottom: 1px solid rgba(99, 99, 99, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 60px;
  margin-right: 10px;
`;

const LogoHeading = styled.div`
  color: var(---text-color);
`;

const AppName = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const AppTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const NavSearch = styled.div`
  border-radius: 20px;
  height: 40px;
  width: 420px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus-within {
    border-color: #185adb;
    caret-color: #185adb;
    .fa-times {
      transform: rotate(90deg);
      color: var(--royal-blue);
    }
  }
`;

const SearchWrapper = styled.div`
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
  margin-left: 10px;
  font-size: 16px;
  height: 100%;
  width: 350px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const LoginButton = styled.div`
  cursor: pointer;
  height: 26px;
  background-color: #31a8ff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  letter-spacing: 1.6px;
  // display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  &:hover {
    background-color: #5fbbff;
    opacity: 1;
  }
  display: none;
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const NavAction = styled.div`
  position: relative;
  .active-dropdown {
    visibility: visible;
    transform: translateY(0);
  }
`;
const DropdownWrapper = styled.div`
  visibility: hidden;
  transform: translateY(-3px);
  transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  background: white;
  position: absolute;
  width: 250px;
  top: 60px;
  right: 0px;
  border-radius: 10px;
  color: var(--text-color-light);
  font-size: 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.1) 0px -5px 20px -2px;
  z-index: 1;
  hr {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0;
    width: 83%;
    margin: 0 auto;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 18px;
      &:hover {
        cursor: pointer;
        color: var(--royal-blue);
      }
    }
  }
`;
