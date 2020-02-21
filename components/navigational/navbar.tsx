import { Component } from "react";
import Link from 'next/link';

export class NavBar extends Component {
	render() {
		return <nav>
			<Link href="/services" as="/diensten">
        <a>Diensten</a>
      </Link>
			<Link href="/about" as="/over-mij">
        <a>Over mij</a>
      </Link>
			<Link href="/contact" as="/contact">
        <a>Contact</a>
      </Link>
		</nav>
	}
}