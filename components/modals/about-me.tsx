import { Component } from "react";

class AboutMeModal extends Component<{active: boolean}, any> {
	

	render() {
		const classes = ['absolute', 'bg-white', 'w-80', 'h-80', 'left-50'];
		if(!this.props.active){
			classes.push('hidden');
		}
		return <section className={classes.join(' ')}>
			<h3>Hi! My name is... Slim Shady</h3>
		</section>
	}
}

export default AboutMeModal;
