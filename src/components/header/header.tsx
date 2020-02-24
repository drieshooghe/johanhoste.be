import Link from 'next/link';
import { Logo } from '../logo';
import React, { Component } from 'react';

interface IHeader {
  mobNavActive: boolean;
}

export class Header extends Component<{}, IHeader> {
  constructor(props) {
    super(props);
    this.state = { mobNavActive: false };
  }

  toggle = (): void => {
    this.setState({ mobNavActive: !this.state.mobNavActive });
  };

  render(): JSX.Element {
    const links = [
      { link: '/services', alias: 'diensten', label: 'Diensten' },
      { link: '/about', alias: 'over-mij', label: 'Over mij' },
      { link: '/contact', alias: 'contact', label: 'Contact' }
    ].map(link => (
      <Link href={link.link} as={link.alias} key={link.alias}>
        <li>
          <a className='navbtn trans cursor-pointer'>
            <div className='navbtn-label trans'>{link.label}</div>
          </a>
        </li>
      </Link>
    ));

    return (
      <header className='bg-green font-white font-menu py-3 lg:py-6 scroll-header'>
        <div className='container w-auto flex justify-between'>
          <Link href='/'>
            <a className='py-1'>
              <Logo className='h-12 lg:h-16' />
            </a>
          </Link>
          <nav className='flex'>
            <button
              className={`z-50 hamburger hamburger--collapse lg:hidden ${this.state.mobNavActive ? 'is-active' : ''}`}
              type='button'
              onClick={this.toggle}
            >
              <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
              </span>
            </button>
            <ul
              className={`${
                this.state.mobNavActive ? 'flex' : 'hidden'
              } z-10 lg:flex justify-center text-center fixed lg:relative inset-0 bg-dark h-screen lg:h-auto w-screen lg:w-auto flex-col lg:flex-row lg:bg-transparent list-reset font-light uppercase text-2xl pb-0`}
            >
              {links}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
