import React from 'react';
import { Content } from '../content/content';
import { HeaderTags } from '../src/components/meta/tags';
import { Header } from '../src/components/header/header';
import { Footer } from '../src/components/footer/footer';
import Parser from 'html-react-parser';

const servicesBody = Content.pages.services.body.map((block, index) => (
  <div key={index}>
    <h2>{block.t}</h2>
    <p>{Parser(block.p)}</p>
  </div>
));

export default function ServicesPage(): JSX.Element {
  return (
    <div className='font-sans bg-white w-screen max-w-full'>
      <HeaderTags />
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='container w-auto scroll-content py-8'>
          <h1>{Content.pages.services.title}</h1>
          {servicesBody}
          <h2 className='mb-4'>{Content.pages.services.cta.message}</h2>
          <a href="/contact" className='btn'>
            <span className='btn-label'>{Content.pages.services.cta.buttonText}</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
