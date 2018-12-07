import React, { Component } from 'react';

import Header from '../Header';

import HeaderImage from '../HeaderImage';

import Footer from '../Footer';

export default class PrekladeTovora extends Component{

	componentWillMount(){
		window.scrollTo(0, 0);
	}

	render(){

		const lang = this.props.currentLang;

		return(
			<div>
				<Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="storitve"/>

        <HeaderImage bgImage='./assets/img/onas_header.jpg' text={lang.PrekladeTovora.title} video={false}/>
				
				<div className="section-wrapper">
					<p>{lang.PrekladeTovora.content}</p>
				</div>

				<Footer/>
			</div>
		);
	}
}