import * as React from 'react';
import { NavBar } from '../components/navigational/navbar';
import { Content } from '../content';
import { HeaderTags } from '../components/meta/tags'
import { Logo } from '../components/logo';

export default function Index() {
  return (
    <div>
      <HeaderTags />
      <div className="font-sans bg-white w-screen max-w-full bg-congress-blue">
        <div className="flex flex-col h-screen bg-cover-home justify-center items-center">
          <div className="flex flex-col min-h-screen justify-center">
            <img src="/public/home-background.jpg" alt=""/>
            <Logo/>
            <h1 className="text-white font-light font-menu text-4xl lg:text-5xl text-center">{Content.pages.home.title}</h1>
            <div className="text-white font-light font-menu text-1xl lg:text-2xl text-center pb-3">{Content.pages.home.body}</div>
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}