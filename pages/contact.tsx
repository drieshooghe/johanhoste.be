import React from 'react';
import { Content } from '../content/content';
import { HeaderTags } from '../src/components/meta/tags';
import { Header } from '../src/components/header/header';
import { Footer } from '../src/components/footer/footer';
import Link from "next/link";

export default function ContactPage(): JSX.Element {
  return (
    <div className='font-sans bg-white w-screen max-w-full'>
      <HeaderTags />
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='container scroll-content py-8'>
          <h1>{Content.pages.contact.title}</h1>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2  mb-8 lg:mb-16 order-1'>
              <div className="font-black"><h3>{Content.general.contact.name}</h3></div>
              <div>
                <Link href={Content.general.contact.geoLink}>
                  <a target="_blank" rel='noopener' className="link link--inline mb-4">
                    <div className="link__label mb-2 text-black">{Content.general.contact.street}&nbsp;{Content.general.contact.number}</div><br />
                    <div className="link__label text-black">{Content.general.contact.postalCode}&nbsp;{Content.general.contact.town}</div>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`tel:${Content.general.contact.geoLink}`}>
                  <a target="_blank" rel='noopener' className="link link--inline mb-4">
                    <div className="link__label mb-2 text-black">{Content.general.contact.street}&nbsp;{Content.general.contact.phone}</div><br />
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`mailto:${Content.general.contact.email}`}>
                  <a target="_blank" rel='noopener' className="link link--inline mb-4">
                    <div className="link__label mb-2 text-black">{Content.general.contact.street}&nbsp;{Content.general.contact.phone}</div><br />
                  </a>
                </Link>
              </div>
              <div>BTW&nbsp;{Content.general.contact.vatNumber}</div>
            </div>
            <div className='w-full lg:w-1/2 mb-8 lg:mb-16 order-3 lg:order-2 flex'>
              <iframe className='w-full flex-1 border-none' frameBorder='0' src={Content.pages.contact.embeddedMapLink} allowFullScreen></iframe>
            </div>
            <div className='w-full order-2 lg:order-3'>
              <iframe src={Content.pages.contact.embeddedFormLink} height='947' frameBorder='0' className='w-full m-0'>Loading...</iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}
