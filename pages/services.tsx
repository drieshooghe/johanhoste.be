import * as React from 'react';
import { NavBar } from '../components/navigational/navbar';
import { Content } from '../content';
import { HeaderTags } from "../components/meta/tags";
import { Header } from "../components/header/header";

export default function Index() {
  return (
    <div className="font-sans bg-white w-screen max-w-full">
      <HeaderTags />
      <div className="flex flex-col min-h-screen">
        <Header />
      </div>
    </div>
  );
}