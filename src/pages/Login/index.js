import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../components/common/InputField';
import * as Yup from 'yup';
import { signIn } from '../../api/function/auth';
import { media } from '../../constants/breakpoint';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email không hợp lệ.')
      .required('Vui lòng nhập email.'),
    password: Yup.string()
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự.')
      .required('Vui lòng nhập mật khẩu.'),
  });

  const handleSignIn = useCallback(async (values) => {
    const user = await signIn(values);
    if (!user) return;
    const { accessToken, refreshToken } = user;
    localStorage.setItem('token', accessToken);
    localStorage.setItem('rfToken', refreshToken);
    setTimeout(() => window.location.reload(), 1500);
  }, []);

  if (localStorage.getItem('token')) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <LoginWrapper>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSignIn}
        >
          {() => {
            return (
              <Form>
                <LoginForm>
                  <Link to="/">
                    <Logo src="/images/logo.svg" />
                  </Link>
                  <h3>Đăng nhập vào eLib</h3>

                  <FastField
                    name="email"
                    type="text"
                    placeholder="Địa chỉ email"
                    label="Email"
                    component={InputField}
                    autoComplete="on"
                  />
                  <FastField
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                    component={InputField}
                    autoComplete="current-password"
                  />
                  <a href="/login">Quên mật khẩu?</a>
                </LoginForm>
                <LoginButton htmlType="submit">Đăng nhập</LoginButton>
              </Form>
            );
          }}
        </Formik>

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
  background: white;
  padding: 4rem 6rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.mobile} {
    padding: 4rem 2.2rem;
  }
`;

const Logo = styled.img`
  width: 8rem;
  height: 8rem;
  margin-bottom: 1rem;
`;

const LoginForm = styled.div`
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
    margin-bottom: 4rem;
  }
  ${media.mobile} {
    h3 {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }
  }
`;

const LoginButton = styled.button`
    height: 5rem;
    width: 36rem;
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
    ${media.mobile} {
      width: 80vw;
      max-width: 36rem;
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
