import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { defaultButton } from './style-utils';

const Side = styled.div`
  float: left;
  height: 95vh;
  width: 17%;
  min-width: 170px;
  padding-top: 50px;
  padding-left: 20px;
  background-color: #ffffff;
  ul {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  list-style: none;
  color: #594a4a;
  display: block;
  width: 30%;
  text-decoration: none;
  font-size: 1rem;
  :hover {
    border-bottom: 1px solid #b77adb;
    cursor: pointer;
  }
`;

const User = styled.p`
  font-size: 0.7rem;
  position: absolute;
  left: 3%;
  bottom: 5px;
`;

const Button = styled.button`
  ${defaultButton()};
  top: 88%;
  left: 4%;
`;

const Sidebar = props => {
  return (
    <div>
      <Side>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/inflows">Inflows</StyledLink>
        <StyledLink to="/outflows">Outflows</StyledLink>
        <Button onClick={props.logout}> Logout</Button>
        <User>{props.email}</User>
      </Side>
    </div>
  );
};

export default Sidebar;
