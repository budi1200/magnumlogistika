import React, { Component } from 'react';

export default class HomeZakaj extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div className='section-wrapper'>
				<span className='section-title'>{lang.HomeZakaj.title}</span>
				<p>{lang.HomeZakaj.desc}</p>
				<ul>
					{lang.HomeZakaj.razlogi.map((razlog, index) => {
						return(<li key={index}>{razlog}</li>);
					})}
				</ul>
			</div>
		);
	}
}