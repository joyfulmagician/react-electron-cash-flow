import React, { Component } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import {defaultButton} from './style-utils';

const ContinerLogin = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-top: 25%;
`;

const Input = styled.input`
  border: none;
  width: 250px;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  font-size: 15px;
  padding: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-bottom: 1px solid #3dccce;
    border-radius: 4px;
  }
`;

const Button = styled.button`
 ${defaultButton()};
  margin-top: 20px;
  position: relative;
`;

const LoginError = styled.p`
 color: red;
 padding: 5px;
 opacity: 0.7;
`;

class Login extends Component {
  state = {
    email: '',
    passwd: '',
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };

  login = () => {
    this.props.login(this.state.email, this.state.passwd);
  };
  render() {
    return (
      <div>
        <ContinerLogin>
          <Input
            type="text"
            onChange={this.handleChange('email')}
            placeholder="email..."
          />
          <br />
          <Input
            type="password"
            onChange={this.handleChange('passwd')}
            placeholder="password..."
          />
          <br />
          {this.props.error ? <LoginError>Check your email and password !</LoginError> : ''}
          <Button type="button" onClick={this.login}>
            Login
          </Button>
        </ContinerLogin>
        <Footer />
      </div>
    );
  }
}

export default Login;
