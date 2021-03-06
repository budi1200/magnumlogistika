import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import SlideShow from 'react-image-show';

import { animStyles } from '../styles';

import Header from '../Header';

import HeaderImage from '../HeaderImage';

import Footer from '../Footer';

export default class KontejnerskiPrevozi extends Component{

	constructor(props){
		super(props);

		this.state = {
			slideshow: [
				'/assets/img/kontejnerski/kontejnerski_1.jpg',
				'/assets/img/kontejnerski/kontejnerski_2.jpg',
				'/assets/img/kontejnerski/kontejnerski_3.jpg'
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

        <HeaderImage bgImage='/assets/img/kontejnerski.jpg' text={lang.KontejnerskiPrevozi.title} video={false}/>

				<StyleRoot>
					<div style={animStyles.fadeIn} className="section-wrapper izredni">
						<p>
							{lang.KontejnerskiPrevozi.content}
						</p>
						<SlideShow style={animStyles.fadeIn} images={this.state.slideshow} width="920px" imagesWidth="800px" imagesHeight="450px" imagesHeightMobile="56vw" infinite fixedImagesHeight />
					</div>
				</StyleRoot>

				<Footer currentLang={this.props.currentLang}/>
			</div>
		);
	}
}