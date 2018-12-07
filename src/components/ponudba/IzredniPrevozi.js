import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import SlideShow from 'react-image-show';

import { animStyles } from '../styles';
import Header from '../Header';
import HeaderImage from '../HeaderImage';
import Footer from '../Footer';

export default class IzredniPrevozi extends Component{

	constructor(props){
		super(props);

		this.state = {
			slideshow: [
				'/assets/img/izredni/izredni.jpg',
				'/assets/img/izredni/izredni2.jpg'
			]
		}
	}

	componentWillMount(){
		window.scrollTo(0, 0);
	}

	render(){

		const lang = this.props.currentLang;

		return(
			<div>
				<Header currentLang={this.props.currentLang} changeLanguage={this.props.changeLanguage} active="storitve"/>

        <HeaderImage bgVideo='/assets/vid/ML3.mp4' text={lang.IzredniPrevozi.title} video={true}/>
				
				<StyleRoot>
					<div style={animStyles.fadeIn} className="section-wrapper izredni">
						<p>{lang.IzredniPrevozi.content}</p>
						<SlideShow style={animStyles.fadeIn} images={this.state.slideshow} width="920px" imagesWidth="800px" imagesHeight="450px" imagesHeightMobile="56vw" infinite fixedImagesHeight />
					</div>
				</StyleRoot>

				<Footer/>
			</div>
		);
	}
}