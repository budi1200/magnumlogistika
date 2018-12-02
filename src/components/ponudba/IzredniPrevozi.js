import React, { Component } from 'react';

import Header from '../Header';

import HeaderImage from '../HeaderImage';

import Footer from '../Footer';

import SlideShow from 'react-image-show';

export default class IzredniPrevozi extends Component{

	constructor(props){
		super(props);

		this.state = {
			slideshow: ['/assets/img/izredni.jpg', '/assets/img/izredni2.jpg']
		}
	}

	render(){

		const lang = this.props.currentLang;

		return(
			<div>
				<Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="storitve"/>

        <HeaderImage bgVideo='/assets/vid/ML3.mp4' text={lang.IzredniPrevozi.title} video={true}/>
				
				<div className="section-wrapper izredni">
					<span>Posebej previdno in natančno preučimo in načrtujemo pretovorne manipulacije ter prevozno pot. Uredimo vse potrebno, da tovor na prevozni poti ustrezno zaščitimo in zavarujemo. Skrbno organiziramo potek celotne logistične storitve.</span>
					<SlideShow images={this.state.slideshow} width="920px" imagesWidth="800px" imagesHeight="450px" imagesHeightMobile="56vw" infinite fixedImagesHeight />
				</div>

				<Footer/>
			</div>
		);
	}
}