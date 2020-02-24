import * as React from 'react';
import { HeaderTags } from '../components/meta/tags';

export default class Contact {
  render(): JSX.Element {
    return (
      <div className='font-sans bg-white w-screen max-w-full'>
        <HeaderTags />
        <div className='flex flex-col min-h-screen'></div>
      </div>
    );
  }
}
