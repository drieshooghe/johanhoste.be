import { Component } from "react";
import CookieConsent from "react-cookie-consent";
import { Content } from '../../content';

export class Footer extends Component {
	render() {
		return <footer className="block trans-slow bg-black py-6">
			<div className="container w-auto text-xs md:text-sm">
				{/* <FooterTop></FooterTop>
				<FooterBottom></FooterBottom> */}
				<CookieConsent
					location='bottom'
					buttonText={Content.general.disclaimer.buttonMessage}
				>
					<div slot="message">
						<span>{Content.general.disclaimer.message}</span>&nbsp;
						<a href={Content.general.disclaimer.ctaLink} className="inline">{Content.general.disclaimer.ctaMessage}</a>
					</div>
				</CookieConsent>
			</div>
		</footer>
	}
}