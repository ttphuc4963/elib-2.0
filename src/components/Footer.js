import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <LogoWrapper>
        <KHTNLogo src="/images/logo-khtn.png" />
        <ContentWrapper>
          <p>Thư viện khoa Công nghệ thông tin</p>
          <p>Trường Đại học Khoa Học Tự Nhiên </p>
        </ContentWrapper>
      </LogoWrapper>
      <CopyRight>@ Phuc Ta</CopyRight>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background: white;
  position: absolute;
  bottom: 0;
  width: 100vw;
  margin-top: 8rem;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px -5px 10px -5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-color-light);
`;

const LogoWrapper = styled.div`
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
  font-weight: 600;
  margin-left: 2rem;
  line-height: 1.6;
`;

const CopyRight = styled.p`
  margin-right: 4rem;
  letter-spacing: 0.2rem;
  font-weight: 600;
`;
