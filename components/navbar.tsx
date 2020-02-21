import { Component } from "react";
import AboutMeModal from "./modals/about-me";

export interface INavBarState {
	aboutMeModal: {
		active: boolean
	}
}

class NavBar extends Component<{}, INavBarState> {

	constructor(props){
		super(props);
		this.state = { 
			aboutMeModal: {
				active: false
			}
		};	
		this.toggleAboutMeModal = this.toggleAboutMeModal.bind(this);   
	}

	toggleAboutMeModal () {
		const isActive = this.state.aboutMeModal.active;
		this.setState({ 
			aboutMeModal: {
				...this.state.aboutMeModal, 
				active: isActive !== true,
			} 
		});
  };

	
	render() {
		return <section className="flex flex-col md:flex-row w-full justify-center">
		<div className="flex justify-center mb-4 md:mr-2 md:mb-0">
			<button onClick={this.toggleAboutMeModal} className="trans text-center block w-40 md:w-auto border-2 border-white rounded-full py-2 px-4 hover:shadow-2xl text-white cursor-pointer focus:outline-none">About me</button>
		</div>
		<div className="flex justify-center mb-4 md:mr-2 md:mb-0">
			<a className="trans text-center block w-40 md:w-auto border-2 border-white rounded-full py-2 px-4 hover:shadow-2xl text-white cursor-pointer focus:outline-none" href="https://github.com/drieshooghe" target="_blank">Github</a>
		</div>
		<div className="flex justify-center mb-4 md:mr-2 md:mb-0">
			<a className="trans text-center block w-40 md:w-auto border-2 border-white rounded-full py-2 px-4 hover:shadow-2xl text-white cursor-cursor focus:outline-none" href="https://be.linkedin.com/in/drieshooghe" target="_blank">Linkedin</a>
		</div>
		<AboutMeModal active={this.state.aboutMeModal.active}/>
	</section>
	}
}

export default NavBar;