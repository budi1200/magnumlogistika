import React, { Component } from 'react';

import Header from '../Header';

import HeaderImage from '../HeaderImage';

import Footer from '../Footer';

export default class ZelezniskiTransport extends Component{

	componentWillMount(){
		window.scrollTo(0, 0);
	}

	render(){

		const lang = this.props.currentLang;

		return(
			<div>
				<Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="storitve"/>

        <HeaderImage bgImage='/assets/img/train.jpg' text={lang.ZelezniskiTransport.title} video={false}/>
				
				<div className="section-wrapper">
					<p>{lang.ZelezniskiTransport.content}</p>
				</div>

				<Footer currentLang={this.props.currentLang}/>
			</div>
		);
	}
}