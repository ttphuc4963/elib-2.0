import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <KHTNLogo src="/images/logo-khtn.png" />
      <ContentWrapper>
        <p>Thư viện khoa Công nghệ thông tin</p>
        <p>Trường Đại học Khoa Học Tự Nhiên </p>
      </ContentWrapper>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  margin-top: 8rem;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px -5px 10px -5px;
  display: flex;
  align-items: center;
`;

const KHTNLogo = styled.img`
  margin-left: 4rem;
  height: 4rem;
  &:hover {
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
  font-size: 1.2rem;
  color: var(--text-color-light);
  font-weight: 600;
  margin-left: 2rem;
  line-height: 1.6;
`;
