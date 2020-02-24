import '../../public/style/main.scss';
import { Component } from 'react';
import Head from 'next/head';

export class HeaderTags extends Component {
  render() {
    return (
      <Head>
        <title>Johan Hoste</title>
        <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style/main.css" />
      </Head>
    );
  }
}
