import React from 'react';
import { NavBar } from '../src/components/navigational/navbar';
import { Content } from '../content/content';
import { HeaderTags } from '../src/components/meta/tags';
import { Logo } from '../src/components/logo';
import { Footer } from '../src/components/footer/footer';

import '../src/style/main.scss';

const HomepageStyle = {
  backgroundImage: 'url(\'img/home-background.jpg\')'
};
export default function HomePage(): JSX.Element {
  return (
    <div className='font-sans bg-white w-screen max-w-full'>
      <HeaderTags />
      <div className='flex flex-col min-h-screen'>
        <div className='flex flex-col h-screen bg-cover-home justify-center items-center' style={HomepageStyle}>
          <Logo className='w-24 md:w-48 lg:w-64 mb-8' />
          <h1 className='text-white font-light font-menu text-4xl lg:text-5xl text-center pb-3'>{Content.pages.home.title}</h1>
          <h2 className='text-white font-light font-menu text-1xl lg:text-2xl text-center pb-3'>{Content.pages.home.body}</h2>
          <NavBar />
        </div>
      </div>
      <Footer />
    </div>
  )
}
