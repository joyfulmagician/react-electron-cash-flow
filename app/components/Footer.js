import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  padding-bottom: 20px;
`;

const Powered = styled.span`
  opacity: 0.5;
`
const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <Powered>
        2018 ©️ Mário Rodeghiero
        </Powered>
      </FooterStyle>
    </div>
  );
};

export default Footer;
