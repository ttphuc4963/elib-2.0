import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container>
      <LoginWrapper>
        <LoginForm>
          <Link to="/">
            <Logo src="/images/logo.svg" />
          </Link>
          <h3>Đăng nhập vào eLib</h3>
          <LoginRow>
            <LoginInput type="email" placeholder="Email" />
          </LoginRow>
          <LoginRow>
            <LoginInput type="password" placeholder="Mật khẩu" />
          </LoginRow>
          <a href="/login">Quên mật khẩu?</a>
        </LoginForm>
        <LoginButton type="button">Đăng nhập</LoginButton>
        <LoginRegister>
          Bạn chưa có tài khoản? <a href="/login">Đăng ký</a>
        </LoginRegister>
      </LoginWrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #777;
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.6;
  }
`;

const LoginWrapper = styled.div`
  border-radius: 1rem;
  width: 70rem;
  background: white;
  padding: 4rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    margin: 1rem 0;
    color: var(--royal-blue);
  }
  h3 {
    font-weight: 700;
    color: var(--text-color);
    font-size: 2.8rem;
    font-family: 'Montserrat', sans-serif;
    color: var(--text-color);
    margin-bottom: 2rem;
  }
  button {
  }
`;

const LoginRow = styled.div`
height: 5rem;
width: 40rem;
margin 1rem 0;
border-radius: 4rem;
background-color: #f2f2f2;
display:flex;
align-items: center;
border: 1px solid var(--line-color);
padding: 0 2rem;

i{
    color: var(--text-color-light);
    margin-right:1.2rem;
    font-size:2rem;
}
`;

const LoginInput = styled.input`
  background: none;
  border: none;
  font-size: 1.6rem;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
    height: 5rem;
    width: 40rem;
    margin 1rem 0;
    border-radius: 4rem;
    background-color: var(--tiki-blue);
    border:none;
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    &:hover{
    cursor:pointer;
    filter: brightness(1.1);
    }
`;

const LoginRegister = styled.div`
  margin: 2rem;
  font-size: 1.4rem;
  a {
    margin-left: 0.5rem;
    font-weight: 600;
    color: var(--my-orange);
  }
`;
