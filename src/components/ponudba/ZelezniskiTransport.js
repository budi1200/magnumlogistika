import React, { Component } from 'react';

import Header from '../Header';

import HeaderImage from '../HeaderImage';

import Footer from '../Footer';

export default class ZelezniskiTransport extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div>
				<Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="storitve"/>

        <HeaderImage bgImage='./assets/img/onas_header.jpg' text={lang.ZelezniskiTransport.title} video={false}/>
				
				<div className="section-wrapper">
					<span></span>
				</div>

				<Footer/>
			</div>
		);
	}
}