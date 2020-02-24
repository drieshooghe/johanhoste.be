import React from 'react';
import { HeaderTags } from '../src/components/meta/tags';
import { Content } from "../content/content";
import { Header } from "../src/components/header/header";
import { Footer } from "../src/components/footer/footer";
import Parser from "html-react-parser";

import '../src/style/main.scss';

const aboutBody = Content.pages.about.body.map((block, index) => (
  <div key={index}>
    <p>{Parser(block.p)}</p>
  </div>
));

export default function AboutPage(): JSX.Element {
  return (
    <div className='font-sans bg-white w-screen max-w-full'>
      <HeaderTags />
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='container w-auto scroll-content py-8'>
          <h1 className='mt-4 py-8 text-4xl font-sans'>{Content.pages.about.title}</h1>
          {aboutBody}
          <p className='mb-4 font-bold'>{Content.pages.about.cta.message}</p>
          <a href="/contact" className='btn'>
            <span className='btn-label'>{Content.pages.about.cta.buttonText}</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}