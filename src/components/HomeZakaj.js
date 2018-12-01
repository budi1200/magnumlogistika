import React, { Component } from 'react';

import { StyleRoot } from 'radium';
import { animStyles } from './styles';

export default class HomeZakaj extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div className='section-wrapper'>
				<StyleRoot style={{display: "flex", flexDirection: "column"}}>
					
					<h1 style={animStyles.fadeInUp} className='section-title'>{lang.HomeZakaj.title}</h1>
					<div className='homezakaj-inner-wrapper'>
						<ul style={animStyles.fadeIn}>
							{lang.HomeZakaj.razlogi.map((razlog, index) => {
								return(<li key={index}>{razlog}</li>);
							})}
						</ul>
						<img style={animStyles.fadeIn} style={{height: 300}} src="./assets/img/why.jpg"/>
					</div>

				</StyleRoot>
			</div>
		);
	}
}