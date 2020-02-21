import * as React from 'react';
import { NavBar } from '../components/navigational/navbar';
import {Content} from '../content';

export default function Index() {
  return (
    <div>
      <h1>{Content.general.website.title}</h1>
      <NavBar/>
    </div>
  );
}