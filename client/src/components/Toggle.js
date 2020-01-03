import React, { Component } from 'react';
import styled from '@emotion/styled';
import MenuIcon from '../assets/icon-feather.svg';

const Icon = styled.img`
  width: 30px;
`;

const Button = styled.button`
  background: none;
  border: none;
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
      <div>
        {this.state.on && this.props.children}
        <Button onClick={this.toggle}>
          <Icon src={MenuIcon}></Icon>
        </Button>
      </div>
    );
  }
}
