import React, { Component } from 'react';

import { StyleRoot } from 'radium';
import { animStyles } from './styles';

export default class HomeStik extends Component{
	render(){

		const lang = this.props.currentLang

		return(
			<div style={{paddingLeft: 0, paddingRight: 0}} className='section-wrapper'>
				<StyleRoot style={{display: "flex", flexDirection: "column"}}>

					<h1 style={animStyles.fadeInUp} className='section-title'>{lang.HomeStik.title}</h1>
					<div className='homestik-list'>
						<span style={animStyles.fadeIn}><a href={"tel:" + lang.HomeStik.phone}><img src='./assets/img/icons/phone.svg' alt="Phone"/>{lang.HomeStik.phone}	</a></span>
						<span style={animStyles.fadeIn}><a href={"mailto:" + lang.HomeStik.email}><img src='./assets/img/icons/mail.svg' alt="Email"/>{lang.HomeStik.email}	</a></span>
					</div>

					<iframe title="Map" style={{...animStyles.fadeIn, border: 0}} height="450" src="https://www.google.com/maps/embed/v1/place?	key=AIzaSyC9tV5ZceiJBmFONrgQp031HuIsypQm3RA&q=Obrtniška+ulica+10,+3240+Šmarje+pri+Jelšah"></iframe>

				</StyleRoot>
			</div>
		);
	}
}