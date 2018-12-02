import React, { Component } from 'react';

import { StyleRoot } from 'radium';
import { animStyles } from './styles';

export default class HomePodrocje extends Component{
	render(){

		const lang = this.props.currentLang;

		return(
			<div id='podrocje' style={{paddingLeft: 0, paddingRight: 0}} className='section-wrapper podrocje'>
				<StyleRoot style={{display: "flex", flexDirection: "column"}}>
					<h1 style={animStyles.fadeInUp} className='section-title padding20'>{lang.HomePodrocje.title}</h1>
					<img style={animStyles.fadeIn} src='./assets/img/podrocje.png'/>
					<p style={animStyles.fadeIn} className='padding20'>
						{lang.HomePodrocje.desc}
					</p>
					<p style={animStyles.fadeIn} className='padding20'>
						{lang.HomePodrocje.desc2}
					</p>
					<p style={animStyles.fadeIn} className='padding20'>
						{lang.HomePodrocje.desc3}
					</p>
				</StyleRoot>
			</div>
		);
	}
}