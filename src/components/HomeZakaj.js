import React, { Component } from 'react';

export default class HomeZakaj extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div style={{maxWidth: '100%', margin: 0}} className='section-wrapper'>
				<h1 className='section-title'>{lang.HomeZakaj.title}</h1>
				{/*<p>{lang.HomeZakaj.desc}</p>*/}
				<div className="homezakaj-inner-wrapper">
					<ul>
						{lang.HomeZakaj.razlogi.map((razlog, index) => {
							return(<li key={index}>{razlog}</li>);
						})}
					</ul>
					<img style={{height: 300}} src="./assets/img/why.jpg"/>
				</div>
			</div>
		);
	}
}