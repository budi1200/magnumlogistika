import React, { Component } from 'react';

export default class HomeZakaj extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div className='section-wrapper'>
				<h1 className='section-title'>{lang.HomeZakaj.title}</h1>
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