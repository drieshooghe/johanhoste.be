import Link from "next/link"
import { Logo } from "../logo"
import { Component } from "react";

interface IHeader {
	mobNavActive: boolean;
}

export class Header extends Component<{}, IHeader> {

	constructor(props) {
		super(props);
		this.state = { mobNavActive: false };
	}

	toggle = () => {
		this.setState({ mobNavActive: !this.state.mobNavActive });
	}

	render() {
		return <header className="bg-green font-white font-menu py-3 lg:py-6 scroll-header">
			<div className="container w-auto flex justify-between">
				<Link href="/">
					<a className="py-1">
						<Logo className='h-12 lg:h-16' />
					</a>
				</Link>
				<nav className='flex'>
					<button className={`z-50 hamburger hamburger--collapse lg:hidden ${this.state.mobNavActive ? 'is-active' : ''}`} type="button" onClick={this.toggle}>
						<span className="hamburger-box">
							<span className="hamburger-inner">BUTTON</span>
						</span>
					</button>
					<ul className={`${this.state.mobNavActive ? 'flex' : 'hidden'} z-10 lg:flex justify-center text-center fixed lg:relative inset-0 bg-dark h-screen lg:h-auto w-screen lg:w-auto flex-col lg:flex-row lg:bg-transparent list-reset font-light uppercase text-2xl pb-0`}>
						<Link href='/services' as='diensten'>
							<li>
								<a className='navbtn trans cursor-pointer'>
									<div className="navbtn-label trans">Diensten</div>
								</a>
							</li>
						</Link>
						<Link href='/about' as='over-mij'>
							<li>
								<a className='navbtn trans cursor-pointer'>
									<div className="navbtn-label trans">Over mij</div>
								</a>
							</li>
						</Link>
						<Link href='/contact' as='contact'>
							<li>
								<a className='navbtn trans cursor-pointer'>
									<div className="navbtn-label trans">Contact</div>
								</a>
							</li>
						</Link>
					</ul>
				</nav>
			</div>
		</header >;
	}
}
