import React, { Component } from 'react';

export default class HomeStik extends Component{
	render(){

		const lang = this.props.currentLang

		return(
			<div className='section-wrapper'>
				<h1 className='section-title'>{lang.HomeStik.title}</h1>
				<div className='homestik-list'>
					<span><a href={"tel:" +lang.HomeStik.phone}><img src='./assets/img/icons/phone.svg'/>{lang.HomeStik.phone}</a></span>
					<span><a href={"mailto:" + lang.HomeStik.email}><img src='./assets/img/icons/mail.svg'/>{lang.HomeStik.email}</a></span>
				</div>

				<iframe height="450" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC9tV5ZceiJBmFONrgQp031HuIsypQm3RA&q=Obrtniška+ulica+10,+3240+Šmarje+pri+Jelšah"></iframe>

			</div>
		);
	}
}