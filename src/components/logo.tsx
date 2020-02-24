import React, { Component } from 'react';

interface ILogoProps {
  className: string;
}

export class Logo extends Component<ILogoProps, {}> {
  render(): JSX.Element {
    return <img src={require('../../assets/logo/jh-logo-white.svg')} className={this.props.className}></img>;
  }
}
