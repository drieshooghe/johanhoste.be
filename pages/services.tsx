import * as React from 'react';
import { Content } from '../content';
import { HeaderTags } from '../components/meta/tags';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import Parser from 'html-react-parser';

export default function Index() {
  const main = Content.pages.services.body.map(block => (
    <div>
      <h3>{block.t}</h3>
      <p>{Parser(block.p)}</p>
    </div>
  ));

  return (
    <div className="font-sans bg-white w-screen max-w-full">
      <HeaderTags />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container w-auto scroll-content mt-8 mb-16">
          <h1 className="mt-4 py-8 text-4xl font-sans">{Content.pages.services.title}</h1>
          {main}
        </div>
        <Footer />
      </div>
    </div>
  );
}
