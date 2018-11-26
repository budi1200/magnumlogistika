import React, { Component } from 'react';

export default class HomeStik extends Component{
	render(){

		const lang = this.props.currentLang

		return(
			<div className='section-wrapper'>
				<span className='section-title'>{lang.HomeStik.title}</span>
				<ul>
					<li><a href={"tel:" +lang.HomeStik.phone}>{lang.HomeStik.phone}</a></li>
					<li><a href={"mailto:" + lang.HomeStik.email}>{lang.HomeStik.email}</a></li>
				</ul>
			</div>
		);
	}
}