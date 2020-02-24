import React, { Component } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Content } from '../../../content/content';
import Link from 'next/link';

export class Footer extends Component {
  render(): JSX.Element {
    return (
      <footer className='block trans-slow bg-black py-6'>
        <div className='container w-auto text-xs md:text-sm'>
          <section className='flex flex-wrap md:text-center'>
            <div className='py-1 w-full md:w-1/3 trans'>
              <span className='text-white'>
                ©&nbsp;{new Date().getFullYear()}&nbsp;{Content.general.contact.name}
              </span>
            </div>

            <div className='py-1 w-full md:w-1/3 trans'>
              <Link href='/disclaimer' as='/disclaimer'>
                <a className='link'>
                  <span className='text-white link__label link__label--dark'>Disclaimer</span>
                </a>
              </Link>
            </div>

            <div className='py-1 w-full md:w-1/3 trans'>
              <Link href='https://www.drieshooghe.com'>
                <a className='link text-white' target='_blank' rel='noopener'>
                  Website by:&nbsp;<span className='text-white link__label link__label--dark'>Dries Hooghe</span>
                </a>
              </Link>
            </div>
          </section>
          <CookieConsent location='bottom' buttonText={Content.general.disclaimer.buttonMessage}>
            <div slot='message'>
              <span>{Content.general.disclaimer.message}</span>&nbsp;
        <a href={Content.general.disclaimer.ctaLink} className='inline'>
                {Content.general.disclaimer.ctaMessage}
              </a>
            </div>
          </CookieConsent>
        </div>
      </footer>
    );
  }
}
