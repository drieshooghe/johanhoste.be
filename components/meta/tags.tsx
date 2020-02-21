import '../../style/style.css';
import { Component } from 'react';
import Head from 'next/head';


export class HeaderTags extends Component {

	render() {
		return <Head>
		<title>Johan Hoste</title>
		<link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
		<link rel="stylesheet" href="/_next/static/css/styles.chunk.css"/>
	</Head>;
	}
}
