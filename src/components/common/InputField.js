import { ErrorMessage } from 'formik';
import React from 'react';
import styled from 'styled-components';

function InputField(props) {
  const { field, form, type, label, placeholder, autoComplete, disabled } =
    props;
  const { name } = field;
  const { errors, touched } = form;
  return (
    <LoginGroup>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <InputWrapper className={errors[name] && touched[name] ? 'invalid' : ''}>
        <LoginInput
          id={name}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...field}
        />
      </InputWrapper>
      <InputError>
        <ErrorMessage name={name} />
      </InputError>
    </LoginGroup>
  );
}

export default InputField;

const LoginGroup = styled.div`
  .invalid {
    border: 1px solid #ff2626;
  }
`;
const InputLabel = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--text-color-light);
  margin-left: 1.4rem;
`;
const InputWrapper = styled.div`
height: 5rem;
width: 36rem;
margin 1rem 0;
border-radius: 4rem;
background-color: #f2f2f2;
display:flex;
align-items: center;
border: 1px solid var(--line-color);
padding: 0 2rem;
input{
  background: none;
  border: none;
  font-size: 1.6rem;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
}
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

const InputError = styled.p`
  color: #ff2626;
  font-weight: 500;
  margin-left: 1.4rem;
`;
