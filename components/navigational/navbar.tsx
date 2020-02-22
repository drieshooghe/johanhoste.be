import { Component } from "react";
import Link from 'next/link';

export class NavBar extends Component {
	render() {
		return <div className="sm:mt-8 lg:mt-12">
			<nav className="font-menu text-2xl">
				<Link href="/services" as="/diensten">
					<a className="home-navbtn trans">
						<div className="navbtn-label uppercase trans">Diensten</div>
					</a>
				</Link>
				<Link href="/about" as="/over-mij">
					<a className="home-navbtn trans">
						<div className="navbtn-label uppercase trans">Over mij</div>
					</a>
				</Link>
				<Link href="/contact" as="/contact">
					<a className="home-navbtn trans">
						<div className="navbtn-label uppercase trans">Contact</div>
					</a>
				</Link>
			</nav>
		</div>
	}
}