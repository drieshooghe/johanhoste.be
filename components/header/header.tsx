import Link from "next/link"
import { Logo } from "../logo"
import { Component } from "react";

export class Header extends Component {

	render() {
		return <header className="bg-green font-white font-menu py-3 lg:py-6 scroll-header">
			<div className="container w-auto flex justify-between">
				<Link href="/">
					<a className="py-1">
						<Logo className='h-12 lg:h-16' />
					</a>
				</Link>
			</div>
		</header>;
	}
}
