import '../style/style.css';
import { Component } from 'react';
import Head from 'next/head';
import PageTitle from './page-title';
import Maintenance from './maintenance/maintenance';


class App extends Component {

	render() {
		return <div>
			<Head>
				<title>Johan Hoste</title>
				<link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
				<link rel="stylesheet" href="/_next/static/css/styles.chunk.css"/>
			</Head>
			<div className='app'>
				<article className="container flex flex-col w-full h-full justify-center items-center">
					<PageTitle/>
					<Maintenance/>
					{/* <NavBar/> */}
				</article>
			</div>
		</div>;
	}
}

export default App
