import React, { Component } from 'react';
import styled from '@emotion/styled';
import MenuIcon from '../assets/icon-feather.svg';

const Icon = styled.img`
  width: 30px;
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
  background: none;
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <Wrapper>
        <Button onClick={this.toggle}>
          <Icon src={MenuIcon}></Icon>
        </Button>
        {this.state.on && this.props.children}
      </Wrapper>
    );
  }
}
