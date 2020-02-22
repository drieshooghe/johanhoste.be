import { Component } from "react";

export class Logo extends Component {
	render() {
		return <img
			src={require('../assets/logo/jh-logo-white.svg')}
			className="w-24 md:w-48 lg:w-64 mb-8"
		></img>;
	}
}
